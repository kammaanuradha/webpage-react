import Home from './Home';
import Login from './login';
import Register from './Register';
import Dashboard from'./Dashboard'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
  
  {
    path: "register",
    element: <Register/>,
  },
  {
    path: "dashboard",
    element: <Dashboard/>,
  }
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
