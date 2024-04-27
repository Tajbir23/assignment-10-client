import { useContext } from "react"
import { CraftContext } from "../Root"
import { Navigate } from "react-router-dom"



const ProtectRoute = ({children}) => {
    
    const {user, loading} = useContext(CraftContext)

    if (loading) {
        return <div className=' flex items-center justify-center'>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    }

    if (user) {
        return children
    } else {
        return <Navigate to='/login' />
    }

    
}

export default ProtectRoute