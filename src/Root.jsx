import { createContext, useState } from "react"
import { RouterProvider } from "react-router-dom"
import App from "./App"
import router from "./Router"


export const CraftContext = createContext()

const Root = () => {
    const [render, setRender] = useState(true)

    const contextValue = {
        render,
        setRender
    }
  return (
    <CraftContext.Provider value={contextValue}>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </CraftContext.Provider>
  )
}

export default Root