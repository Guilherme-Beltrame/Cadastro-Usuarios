import { useEffect, useState, useRef } from 'react'//ReactHooks
import './style.css'
import Lixeira from '../../assets/excluir.png'
import api from '../../services/api'

//TODO Sempre Lembre do Todo, você vai usar muito ele ainda!!
//FIXME Tem essa forma de lnkar ele também!

function App() {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAgr = useRef()
  const inputEmail = useRef()

  async function getUsers(){
    const usersFromApi = await api.get('/usuarios')
    setUsers(usersFromApi.data)
  }

  async function createUser(){
    await api.post('/usuarios',{
      nome: inputName.current.value,
      idade: parseInt(inputAgr.current.value),
      email: inputEmail.current.value
    })
    getUsers()
    
  }

  async function deleteUser(id) {
    await api.delete(`/usuarios/${id}`)
    getUsers()
  }

  useEffect(()=>{
    getUsers()
  }, [])

  return (
      <div className='Container'>
        <form >
          <h1>Cadastro de Usuários</h1>
          <input name="nome" ref={inputName} placeholder='Nome: Gustavo ' type="text"/>
          <input name="idade" ref={inputAgr} placeholder='Idade: 33' type='number'/>
          <input name="email" ref={inputEmail} placeholder='Email: Gu@gmail.com' type='email'/>
          <button type='button' onClick={createUser}>Cadastrar</button>
        </form>

        <div>
          {users.map((user)=>(
            <div key={user.id} className='card'>
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.agr}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>
            <button onClick={()=>deleteUser(user.id)}>
              <img src={Lixeira} alt="excluir" />
            </button>
          </div>
          ))}
        </div>
      </div>
  )
}

export default App
