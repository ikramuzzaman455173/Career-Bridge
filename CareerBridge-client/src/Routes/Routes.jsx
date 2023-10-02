import { createBrowserRouter } from 'react-router-dom'
import MainLayoutPage from '../MainLayoutPage/MainLayoutPage'
import HomePage from '../HomePage/HomePage'
import Login from '../Components/Login/Login'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayoutPage />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      // {
      //   path: '/signUp',
      //   element: <SignUp />
      // },
    ],
  },
  // {
  //   path: '/dashboard',
  //   element:<DashboardLayout />,
  //   // errorElement: <ErrorPage />,
  //   // children: [
  //   //   {

  //   //   },
  //   // ]
  // }
])