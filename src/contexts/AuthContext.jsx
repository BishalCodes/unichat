import {auth} from "../firebase.js"
import {createContext, useContext, useEffect, useState} from "react"
import {useLocation, useNavigate} from "react-router-dom"

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)
export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user)
            setLoading(false)
            user && navigate("/chats")
        })
    }, [user, location])
    const value = {user}
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}