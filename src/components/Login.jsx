import {GoogleOutlined, FacebookOutlined} from '@ant-design/icons'
import {signInWithPopup,signInWithRedirect} from "firebase/auth"
import {auth, facebookProvider, googleProvider} from "../firebase.js"

const Login = () => {
    return (
        <div>
            <div style={{
                background: "#888",
                padding: "40px",
                borderRadius: "20px",
            }}>
                <h2>Welcome to unichat!</h2>
                <div style={{
                    background: "#3f70ca",
                    padding: "6px 6px",
                    textAlign:"center",
                    borderRadius: "10px",
                    cursor: "pointer",
                    width:"300px"
                }}
                     onClick={async () => await signInWithPopup(auth, googleProvider)}
                >
                    <GoogleOutlined/> Sign in with Google
                </div>
                <br/>
                <br/>
                <div style={{
                    background: "#3f70ca",
                    padding: "6px 6px",
                    textAlign:"center",
                    borderRadius: "10px",
                    cursor: "pointer",
                    width:"300px"
                }}
                     onClick={async () => await signInWithRedirect(auth, facebookProvider)}
                >
                    <FacebookOutlined/> Sign in with Facebook
                </div>
            </div>
        </div>
    )
}
export default Login
