import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { FaGoogle } from 'react-icons/fa';
import UseTitle from "../../hooks/UseTitle";

const Login = () => {

    const {signIn , logInWithGoogle} = useContext(AuthContext)
    UseTitle('Login')
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password)
        signIn(email, password)
        .then(Result => {
            console.log(Result.user)
            navigate(from, { replace: true })
        })
        .catch(error => console.log(error))
    }


    const handleLoginGoogle = () =>{
        logInWithGoogle()
        
          navigate(from, { replace: true })
          
       
    }

    return (
        <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <h1 className="text-3xl font-bold text-center">Please Login</h1>
              <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
              </form>
             <div className="text-center my-3">
             <button onClick={handleLoginGoogle} className="btn btn-outline">
                <FaGoogle/> Login with Google
              </button>
             </div>
              <p>New to Disney Dream Dolls Please <Link className="text-primary" to='/register'>Register</Link></p>
            </div>
          </div>
        </div>
    );
};

export default Login;