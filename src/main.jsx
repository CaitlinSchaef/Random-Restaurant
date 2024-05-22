import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import About from './Pages/About'
import App from './Pages/App'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import Order from './Pages/Order'
import Review from './Pages/Review'
import ErrorPage from './Pages/ErrorPage'
import Header from './Header'
// import Footer from './Footer'




function Layout() {
  return (
      <>
        <Header />
        <div id='page-content'>
          <Outlet />
        </div>
        {/* <Footer /> */}
      </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/order',
        element: <Order />
      },
      {
        path: '/review',
        element: <Review />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
