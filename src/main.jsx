import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import {Header,Footer,Home,Login,Signup,Content,Error} from './components/index.js'
import {Provider} from 'react-redux'
import {store} from './store/authStore'
import AddPost from './components/AddPost.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: (
      <>
        <Header />
        <Error />
        <Footer />
      </>
    ),
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/content',
        element: <Content/>
      },
      {
        path: '/addpost',
        element: <AddPost/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <RouterProvider router = {router}/>
  </Provider>
)
