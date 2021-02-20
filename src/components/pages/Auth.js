import { Route } from 'react-router-dom';
import Login from '../partials/Login';
import Signup from '../partials/Signup';

const Auth = (props) => {

    return (
        <div className="auth-panel">
            <Route
                exact
                path='/auth/login'
                render={() => (<Login handleAuth={props.handleAuth} />)}
            />
            <Route
                exact
                path='/auth/signup'
                render={() => (<Signup handleAuth={props.handleAuth} />)}
            />
        </div>
    );
}
export default Auth;