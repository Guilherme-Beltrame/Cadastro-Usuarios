import './App.css'
import Lixeira from '../../assets/excluir.png'

//TODO Sempre Lembre do Todo, você vai usar muito ele ainda!!
//FIXME Tem essa forma de lnkar ele também!

function App() {

  const users = [
    {
      id: 'dadawdw123',
      idade: 34,
      nome: "Julia",
      email: "Julia@gmail.com"
    },{
      id: 'yuv213sda',
      idade: 25,
      nome: "Leandro",
      email: "Leandro@gmail.com"
    },{
      id: 'dadawdw123',
      idade: 34,
      nome: "Carla",
      email: "Carla@gmail.com"
    },{
      id: 'asdw123',
      idade: 54,
      nome: "Darwin",
      email: "darwin@gmail.com"
    },
  ]

  return (
      <div className='Container'>
        <form >
          <h1>Cadastro de Usuários</h1>
          <input name="nome" type="text"/>
          <input name="idade" type='number'/>
          <input name="email" type='email'/>
        </form>

        <div>
          {users.map((user)=>(
            <div key={user.id}>
            <div>
              <p>Nome: {user.nome}</p>
              <p>Idade: {user.idade}</p>
              <p>Email: {user.email}</p>
            </div>
            <button>
              <img src={Lixeira} alt="excluir" />
            </button>
          </div>
          ))}
        </div>
      </div>
  )
}

export default App
