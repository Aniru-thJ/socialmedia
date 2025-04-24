import "./login.scss";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import {AuthContext} from "../../context/authContext";

export const Login = () => {
    const {login} = useContext(AuthContext);

    const handleLogin=()=>{
        login();

    }
  return (
    <div className="login">
    <div className="card">
    <div className="left">
        <div className="header">
        <h1>Vanakkam!.</h1>
        <h5>Nanba & Nanbis</h5>
        </div>
        <div className="footer"><span>
            Don't you have an account?
        </span>
        <Link to="/register">
        <button className="buttonclass">Register Now Mamae!</button></Link>
        </div>
        
       
        
        
       </div>
    <div className="right">
        <h1>Login</h1>
        <form>
            <input type="text" placeholder="Enter Username"/>
            <input type="password" placeholder="Enter password"/>
            <button onClick={handleLogin}>Login</button>
        </form>
        
    </div>
    </div>
   </div>
  );
};
