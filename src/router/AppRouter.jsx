import {Route, Routes} from "react-router-dom"
import Login from "../components/Login.jsx"
import Chats from "../components/Chats.jsx"

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/chats" element={<Chats/>}/>
            </Routes>
        </div>
    )
}
export default AppRouter
