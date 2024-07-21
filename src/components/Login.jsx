import React, { useState } from 'react'
import {Input,Container} from './index.js'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router';
import {authService} from '../appwrite/auth.js'
import { useDispatch } from 'react-redux';
import {authlogin} from '../store/authSlice.js'

function Login() {
  const {register,handleSubmit , formState: { errors }} = useForm();
  const [error,setError] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const login = async(data) => {
    setError("")
    try {
      const auth = await authService.loginAccount(data)
      if(auth) {
        const session = await authService.getUser()
        if(session) {
          dispatch(authlogin(session))
          navigate('/')
        }
        else {
          setError("Problem retreiving the session..")
        }
      }
      else {
        setError("Invalid credentials.")
      }
    }
    catch(e) {
      setError(e.message)
    }

    console.log(data)
    // navigate('/')
  }
  return (
    <Container>
      <div className = "bg-white h-96 text-black flex flex-col justify-center items-center">
      <form onSubmit = {handleSubmit(login)} className = "w-1/2 mx-auto py-10 flex flex-col gap-5">

        <Input 
          type = "email" label = "Email: " placeholder = "Enter your mail" 
          className = "outline-none border-gray-200 border-2"
          autoComplete="username"
          {...register("email" , {
            required: true,
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: "Invalid email address"
            }
            })
          }
        />
        {errors.email && <p className = "text-red-600 font-bold">{errors.email.message}</p>}
        <Input 
          type = "password" label = "Password: " placeholder = "Enter your password" 
          className = "outline-none border-gray-200 border-2"
          autoComplete="current-password"
          {...register("password" , {
            required: true
          })}
        />
        <button className = "bg-blue-400 w-1/2 rounded-xl mx-auto py-4">Login</button>
      </form>
      {error && <p className = "text-red-600 font-bold">{error}</p>}
      </div>
    </Container>
  )
}

export default Login