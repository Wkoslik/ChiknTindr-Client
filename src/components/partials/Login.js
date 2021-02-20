import { useState, useEffect } from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { Redirect, Link } from 'react-router-dom';

// TODO move into own file
const Error = (props) => {
    useEffect(() => {
        console.log(props.error);
    }, []);

    return (
        <div className="error-card">
            <h3>ERROR!</h3>
            <p>{props.error.message}</p>
        </div>
    )
}


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = e => {
    e.preventDefault();

    axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/login`,
        { email, password }
    ).then(response => {
        localStorage.setItem('jwtToken', response.data.token);
        setAuthToken(response.data.token);
        props.handleAuth(response.data.user);
        setRedirect(true);
    }).catch(setError)
    }

    if (redirect) return <Redirect to='/profile' />
    return (
        <section>
            {error ? <Error error={error} /> : null}
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-elem">
                <label htmlFor="email">Email: </label>
                <input
                type="email"
                name="email"
                placeholder="email goes here"
                onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="form-elem">
                <label htmlFor="password">Password: </label>
                <input
                type="password"
                name="password"
                placeholder="password goes here"
                onChange={e => setPassword(e.target.value)}
                />
            </div>
            <input type="submit" value="Log In" />
            </form>
            
            <p>New to ChiknTindr? <Link className="signup-text" to="/auth/signup">Signup here</Link></p>
        </section>
    );
}
export default Login;