import React from 'react'
import Container from './Container'
import {Link,NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logout from './Logout'

function Header() {

  const authStatus = useSelector(state => state.auth.authStatus)



  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Content',
      slug: '/content',
      active: authStatus
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
  ]
  return (
    <Container>
        <div className = "bg-blue-400 px-36 h-24 flex justify-between items-center">
          <div className='text-4xl font-bold text-white'>X<span className = "text-3xl text-black">YZ COMPANY</span></div>
          <ul className = "text-xl font-bold text-white flex gap-5 justify-center items-center">
            {
              navItems.map((item) => (
                item.active && (
                  <NavLink
                    key = {item.name}
                    to = {item.slug}
                    className = {({isActive}) => {
                      return isActive ? "text-black" : "text-white"
                    }
                  }>
                  {item.name}
                  </NavLink>
                )
              ))
            }
            {
              authStatus && <Logout/>
            }
          </ul>
        </div>
    </Container>
  )
}

export default Header
