import db from "./models/table.js"
import express from "express"

const router = express.Router();

//Feito
router.post('/tarefas',(req,res) =>{
    try{
        const {name,textarea} = req.body

        if(name.trim() === "") {
            return res.status(400).json({error: "Nome e Descrição não podem estar vazios"})
        }

        const stmtCreate = db.prepare(`
            INSERT INTO missions(name,textarea) VALUES (?,?)
            `);
            stmtCreate.run(name,textarea);

            res.status(201).json({name,textarea})

    }catch(err){
        console.log(err);
    }
});

//Feito
router.get('/listar-tarefas', (req, res) => {
    try {
        const stmt = db.prepare(`SELECT * FROM missions`);
        //executar todas as linhas resultantes do Select em uma lista array
        const missao = stmt.all();
        /* db.prepare(`BEGIN`).run();
    
        db.prepare(`COMMIT`).run(); */
        console.log(missao)
        res.status(200).json(missao)
    } catch (err) {
        console.error(err)
    }

});

//Feito
router.put('/tarefas/:id', (req, res) => {

    try {
        //Parametro que armazena o id da url
        const id = req.params.id;

        //Req.body armazena os dados recebidos no body
        const { name, textarea } = req.body

        //Verifica se a missão existe
        const selectStmt = db.prepare(`
           SELECT * FROM missions WHERE id = ?
        `)
        
            //Id invalido
        if (!selectStmt) return res.status(404).json({ message: 'Tarefa não encontrada' })

            
        const updateStmt = db.prepare(`
            UPDATE missions
            SET name = ?, textarea = ?
            WHERE id = ?
            `)
        const result = updateStmt.run(name, textarea,id);
        
        //Verifica se houve atualização
        if(result.changes === 0) return res.status(500).json({message: 'Erro ao atualizar missão'})
    

        res.status(201).json({id,name,textarea});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao atualizar missão' });

    }

});

//Feito
router.delete('/tarefas/:id', async (req, res) => {
    try {
        const id = req.params.id;

        if(!id) return res.status(400).json({ error: "ID não informado." });

        const tarefa = db.prepare("SELECT * FROM missions WHERE id = ?").get(id);

        if(!tarefa) return res.status(404).json({ error: "ID não inválido!" });

        db.prepare(`
            DELETE FROM missions
            WHERE id = ?
            `).run(id);    

        res.status(200).json({ message: 'tarefa deletada com sucesso'})
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao deletar missão' });
    }
})

/* 
Operações principais:

db.prepare - iniciar transação
.get - SELECT em 1 linha
.all - SELECT em todas as linhas
.run - Rodar comandos INSERT/UPDATE/DELETE 

*/
export default router;