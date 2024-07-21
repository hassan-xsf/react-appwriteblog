import React from 'react'
import Container from './Container'
import { useSelector } from 'react-redux'

function Home() {

  const status = useSelector(state => state.auth.authStatus)

  return (
    <Container>
      <div className = "h-96 bg-white text-bold text-2xl text-black">
        <span>{status ? "You are logged in!" : "You are not logged in"}</span>
      </div>
    </Container>
  )
}

export default Home