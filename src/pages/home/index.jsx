import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

function Home() {

  const missions = [
    {
      id: '132131d',
      nome: 'Andressa',
      descricao: 'Correr uma maratona!'
    },
    {
      id: '1321313e',
      nome: 'Bento',
      descricao: 'Cozinhar um bolo'
    },
     {
      id: '1321313e',
      nome: 'Cosmo',
      descricao: 'Quero ganhar muito dinheiro'
    },

  ]

  return (

    <div className='container'>
      <form action="">
        <h1>To-do List</h1>
        <input placeholder="Nome" type="text" />
        <textarea name="descricao" id="descricao"></textarea>
        <button type='button'>Cadastrar</button>
      </form>

      {missions.map((mission) => (
        <div Key={mission.id} className='card'>
          <div>
            <p>Nome: <span>{mission.nome}</span> </p>
            <p>Descrição:<span>{mission.descricao}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}

    </div>
  )

}

export default Home
