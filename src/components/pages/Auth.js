import Login from '../partials/Login'
import Signup from '../partials/Signup'

const Auth = (props) => {
    return (
        <div className="authPanel" >
        <Signup />
        <Login />
        </div>
    )
}

export default Auth