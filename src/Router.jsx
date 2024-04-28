import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/authentications/Login";
import Register from "./components/authentications/Register";
import Contact from "./pages/ExtraRoute/Contact";
import About from "./pages/ExtraRoute/About";
import AddArtCraft from "./pages/ArtCraft/AddArtCraft";
import Body from "./pages/Body";
import ProtectRoute from "./components/ProtectRoute";
import Category from "./pages/ArtCraft/Category";
import AllArtCraft from "./pages/ArtCraft/AllArtCraft";
import MyArtCraft from "./pages/ArtCraft/MyArtCraft";
import ViewDetails from "./pages/ViewDetails";
import UpdateModal from "./components/Modals/UpdateModal";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "add_art_craft/:id",
        element: (
          <ProtectRoute>
            <AddArtCraft />
          </ProtectRoute>
        ),
      },
      {
        path: "category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `https://art-craft-server-three.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/all_art",
        element: <AllArtCraft />,
        loader: () =>
          fetch("https://art-craft-server-three.vercel.app/all_art_crafts"),
      },
      {
        path: "my_art_craft/:id",
        element: (
          <ProtectRoute>
            <MyArtCraft />
          </ProtectRoute>
        ),
      },
      {
        path: "view_details/:id",
        element: (
          <ProtectRoute>
            <ViewDetails />
          </ProtectRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://art-craft-server-three.vercel.app/view_details/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <ProtectRoute>
            <UpdateModal />
          </ProtectRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://art-craft-server-three.vercel.app/view_details/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
