import { createBrowserRouter } from 'react-router-dom'
import MainLayoutPage from '../MainLayoutPage/MainLayoutPage'
import HomePage from '../HomePage/HomePage'
import Login from '../Components/Login/Login'
import SignUp from '../Components/SignUp/SignUp'
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
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
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