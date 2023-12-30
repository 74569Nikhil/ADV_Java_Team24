import '../CSS/Login.css';
import backgroundVideo from '../Video/LoginVideo.mp4';
import { Link } from 'react-router-dom';


export function Login() {
    return (
        <div>
            <video autoPlay muted loop id="myVideo">
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            <form>
                <h2 id="user">Login</h2>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"

                    required
                />
                <br />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"

                    required
                />
                <br />

                <br />
                <button type="submit" id="btn">
                    LogIn
                </button>
                <p>
                    Don't have an account? <Link to="/Signup">Sign up</Link>.
                </p>
            </form>
        </div>
    );
}

export default Login;