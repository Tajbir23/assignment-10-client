import { useContext } from "react"
import { CraftContext } from "../Root"
import { Navigate } from "react-router-dom"



const ProtectRoute = ({children}) => {
    
    const {user, loading} = useContext(CraftContext)

    if (loading) {
        return <h1>Loading</h1>
    }

    if (user) {
        return children
    } else {
        return <Navigate to='/login' />
    }

    
}

export default ProtectRoute