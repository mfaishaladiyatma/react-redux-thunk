import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import { fetchPostAsync, fetchPostFailed, fetchPostStart, fetchPostSuccess} from './action'
import { useState } from 'react'

function Login() {
  const[username, setUsername] = useState('')
  const[password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchPostAsync(username, password))
  }

  return (
    <>
    <form action="">
      <label htmlFor="">Username: </label>
      <input type="text"vvalue={username} onChange={(e) => setUsername(e.target.value)}/>
      <label htmlFor="">Password: </label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

      <button onClick={handleSubmit}>Submit</button>
    </form>
    </>
  )
}

export default Login