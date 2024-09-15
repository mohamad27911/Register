import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import './index.css'
import SignIn from './Pages/Auth/SignIn'
import SignUp from './Pages/Auth/SignUp'

function App() {

  const route = createBrowserRouter(
    [
      {
        path:"/",
        element:<SignUp/>},
        {
          path:"/signin",
          element:<SignIn/>,}
      ]
  );
  return (
   
    <>
  <RouterProvider router={route}></RouterProvider>
  
    </>
  )
}

export default App
