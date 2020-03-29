import React, { useState } from 'react'
import UserTable from './UserTable'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'
import {v4} from 'uuid'

const FormCRUD = () => {

  const userData = [
    { id: v4(), name: 'Tania', username: 'floppydiskette' },
    { id: v4(), name: 'Craig', username: 'siliconeidolon' },
    { id: v4(), name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(userData)

  const [editing, setEditing] = useState(false)

  const [userEdit, setUserEdit] = useState({
    id: null,
    name: '',
    username: ''
  })

  const addUser = (user) => {
    user.id = v4()
    setUsers(
      [...users, user]
    )
  }

  const editRow = (user) => {
    setEditing(!editing)
    setUserEdit({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => user.id === id ? updatedUser : user))
  }

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">

          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm userEdit={userEdit} updateUser={updateUser}/>
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser}/>
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
  )
}

export default FormCRUD