import './style.css'
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
      id: 'asdqw1365',
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
          <input name="nome" placeholder='Nome: Gustavo ' type="text"/>
          <input name="idade" placeholder='Idade: 33' type='number'/>
          <input name="email" placeholder='Email: Gu@gmail.com' type='email'/>
          <button>Cadastrar</button>
        </form>

        <div>
          {users.map((user)=>(
            <div key={user.id} className='card'>
            <div>
              <p>Nome: <span>{user.nome}</span></p>
              <p>Idade: <span>{user.idade}</span></p>
              <p>Email: <span>{user.email}</span></p>
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
