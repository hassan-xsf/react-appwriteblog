import React from 'react'
import { authService } from '../appwrite/auth'
import { useDispatch } from 'react-redux'
import { authlogout } from '../store/authSlice'
import { useNavigate } from 'react-router'


function Logout() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logoutAccount()
      .then(() => {
        dispatch(authlogout())
        navigate('/')
      })
  }
  return (
    <button className = "bg-blue-400 py-4 px-2" onClick = {handleLogout}>Logout</button>
  )
}

export default Logout