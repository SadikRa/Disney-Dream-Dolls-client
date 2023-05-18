import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {

    const {createUser} = useContext(AuthContext)


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        const photo = form.photo.value
        console.log(name, email, password, photo)

        createUser(email, password)
        .then(result => {
            console.log(result.user)
            form.reset()
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <h1 className="text-3xl font-bold text-center">Please Login</h1>
              <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Register" />
              </div>
              </form>
              <p>Already have An account please <Link className="text-primary" to='/login'>Login</Link></p>
            </div>
          </div>
        </div>
    );
};

export default Register;