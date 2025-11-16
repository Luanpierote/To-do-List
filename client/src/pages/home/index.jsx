import { useEffect, useState, useRef } from 'react';
import './style.css';
import Trash from '../../assets/trash.svg';
import api from '../../services/api.js';

// React Hooks - useState,useRef

function Home() {
  //colocar o banco de dados do servidor na porta: 3000

  //Variável que contem os dados + variável responsável por colocar os dados
  const [missions, setMissions] = useState([])

  const inputName = useRef();
  const inputTextarea = useRef();

  async function getMissions() {
    const missionsFromAPI = await api.get('/api/listar-tarefas')

    //altera os dados dentro de missions
    setMissions(missionsFromAPI.data)
  }


  //Mudar essa variável api, para conexão com o próprio servidor React da porta 5173!
  async function createMissions() {
       await api.post('/api/tarefas',{
        name: inputName.current.value,
        textarea: inputTextarea.current.value
       }) 

       getMissions();
  }

   async function deleteMissions(id) {
    await api.delete(`/api/tarefas/${id}`)

    getMissions();
  }

  //Toda vez que a pagina carregar, ele vai executar
  useEffect(() => {
    getMissions();
  }, [])

  return (

    <div className='container'>
      <form action="">
        <h1>To-do List</h1>
        <input placeholder="Nome" type="text" ref={inputName}/>
        <textarea placeholder='Descreva o que vai fazer...' name="descricao" id="descricao" ref={inputTextarea}></textarea>
        <button type='button' onClick={createMissions}>Criar Nova Tarefa</button>
      </form>

      {/* Colando as informações registradas no banco de dados */}
      {missions.map((mission) => (
        <div key={mission.id} className='card'>
          <input type="checkbox" name="check" id="" />
          <div className='text'>
            <p>Tarefa: <span>{mission.name}</span></p>
            <p>Descrição: <span>{mission.textarea}</span></p>
          </div>
          {/* estrutura necessária para enviar uma função com parametro */}
          <button onClick={() => deleteMissions(mission.id)}>
            <img src={Trash} />
          </button>
          
        </div>
      ))}

    </div>
  )

}

export default Home
