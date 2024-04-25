import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/authentications/Login";
import Register from "./components/authentications/Register";
import Contact from "./pages/ExtraRoute/Contact";
import About from "./pages/ExtraRoute/About";
import AddArtCraft from "./pages/ArtCraft/AddArtCraft";
import Body from "./pages/Body";
import ProtectRoute from "./components/ProtectRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>404</h1>,
    children: [
        {
            path: '/',
            element: <Body />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <Register />
        },
        {
            path: '/contact',
            element: <Contact />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: 'add_art_craft/:id',
            element: <ProtectRoute><AddArtCraft /></ProtectRoute>
        }
    ]
  }
])

export default router;