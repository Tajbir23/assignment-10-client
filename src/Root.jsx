import { createContext, useEffect, useState } from "react"
import { RouterProvider } from "react-router-dom"
import App from "./App"
import router from "./Router"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./components/config/config"


export const CraftContext = createContext()

const Root = () => {
    const [render, setRender] = useState(true)
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [deleteModal, setDeleteModal] = useState(false)
    const [deleteItem, setDeleteItem] = useState()


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async(user)=> {
            await user
            if(user){
                setUser(user)
                setLoading(false)
                setRender(false)
            }else{
                setLoading(false)
            }
        })
        return () => unsubscribe()
    },[])

    const contextValue = {
        render,
        setRender,
        user,
        loading,
        deleteModal,
        setDeleteModal,
        deleteItem,
        setDeleteItem,
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