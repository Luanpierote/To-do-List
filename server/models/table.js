//FUNCIONA

import Database from "better-sqlite3";
import fs from 'fs'
import path from "path";
import { fileURLToPath } from "url";


// Necessário em ES Modules (import/export)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho absoluto para o banco dentro de models
const dbPath = path.join(__dirname, "banco.db");

const db = new Database(dbPath,{
    verbose: console.log    
}) //mensagem síncrona


    //Conferir se o servidor do banco de dados existe;
const criarTabelas = async () => {
    const arquivo = './banco.db'
    const existe = fs.existsSync(arquivo)
    
    if (existe) {
        console.log(" Banco de dados criado!")
    }
}

db.prepare(`
    CREATE TABLE IF NOT EXISTS missions(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    textarea TEXT 
    )
    `).run();

/* db.prepare(`INSERT INTO missions(name,textarea) VALUES (?,?)`).run("Luan", "trabalhar");  */

const tarefa = db.prepare(`SELECT * FROM missions`).all();
console.log(tarefa);

export default db;