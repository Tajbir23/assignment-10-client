import { useContext } from "react"
import { CraftContext } from "../Root"
import { useNavigate } from "react-router-dom"



const ProtectRoute = ({children}) => {
    
    const {user, loading} = useContext(CraftContext)
    const navigate = useNavigate()
    if (loading) {
        return <h1>Loading</h1>
    }

    if (user) {
        return children
    } else {
        return navigate("/login")
    }

    
}

export default ProtectRoute