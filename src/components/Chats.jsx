import {ChatEngine} from "react-chat-engine"
import {auth} from "../firebase.js"
import {useNavigate} from "react-router-dom"
import {useAuth} from "../contexts/AuthContext.jsx"
import {useEffect, useState} from "react"
import axios from "axios"

const Chats = () => {
    const navigate = useNavigate()
    const {user} = useAuth()
    const [loading, setLoading] = useState(true)
    const handleLogout = async () => {
        await auth.signOut()
        navigate("/")
    }
    const getFile = async (url) => {
        const response = await fetch(url)
        const data = await response.blob()
        return new File([data], "userPhoto.jpg", {type: "image/jpeg"})
    }

    useEffect(() => {
        if (!user) {
            navigate("/")
            return
        }
        axios.get('https://api.chatengine.io/users/me/', {
            headers: {
                "project-id": import.meta.env.VITE_PROJECT_ID,
                "user-name": user.email,
                "user-secret": user.uid,
            }
        })
            .then(() => {
                setLoading(false)
            })
            .catch(() => {
                let formdata = new FormData()
                formdata.append('email', user.email)
                formdata.append('username', user.email)
                formdata.append('secret', user.uid)
                getFile(user.photoURL)
                    .then((avatar) => {
                        formdata.append('avatar', avatar, avatar.name)
                        axios.post("https://api.chatengine.io/users/",
                            formdata,
                            {
                                headers: {
                                    "private-key": import.meta.env.VITE_PRIVATE_KEY,
                                }
                            }
                        )
                            .then(() => setLoading(false))
                            .catch((error) => console.log(error))
                    })
            })
    }, [user, navigate])

    if (!user || loading) return "Loading ... "
    return (
        <div>
            <div className="nav-bar"
                 style={{
                     display: "flex",
                     justifyContent: "space-between",
                     padding: "0 8rem",
                     alignItems: "center",
                 }}
            >
                <div
                    style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                    }}

                >
                    Unichat
                </div>
                <div
                    style={{
                        cursor: "pointer",
                    }}
                    onClick={handleLogout}
                >
                    Logout
                </div>
            </div>
            <ChatEngine
                height="calc(100vh - 66px)"
                projectID={import.meta.env.VITE_PROJECT_ID}
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    )
}
export default Chats
