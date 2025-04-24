import "./register.scss";
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className="register">
      <div className="card">
      <div className="right">
          <h1>Register</h1>
          <p>New here? Register Now!</p>
          <form>
            <input type="name" placeholder="Enter your user_name"/>
            <input type="password" placeholder="Enter your password"/>
            <input type="email" placeholder="Enter your recovery email"/>
            <input type="date" placeholder="Enter your bday!"/>
            <button>Register</button>
          </form>


        </div>
        <div className="left">
          <div className="header">
          <h1>Do You have an account ?</h1>
          <Link to="/login"><button>Login Now</button></Link>
          
          </div>
             
        </div>
        
      </div>
    </div>
  )
}
