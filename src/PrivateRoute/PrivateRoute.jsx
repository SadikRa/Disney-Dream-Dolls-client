
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const location = useLocation()

    const {user,  loading } = useContext(AuthContext)

    if(loading){
        return <> loading...  <progress className="progress w-56"></progress></>
    }
    if(user){
        return children
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoute;