import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/authentications/Login";
import Register from "./components/authentications/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>404</h1>,
    children: [
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <Register />
        }
    ]
  }
])

export default router;