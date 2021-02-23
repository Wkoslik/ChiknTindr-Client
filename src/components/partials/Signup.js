import { useState } from 'react';
import axios from 'axios';

import setAuthToken from '../../utils/setAuthToken';

import { Redirect } from 'react-router-dom';

const Signup = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // TODO: add from password verification
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(
            `${process.env.REACT_APP_SERVER_URL}/api/signup`,
            { name, email, password }
        ).then(response => {
            console.log(response.data)
            localStorage.setItem('jwtToken', response.data.token); 
            setAuthToken(response.data.token);
            props.handleAuth(response.data.user);
            setRedirect(true);
        }).catch(err => console.log(`😖 error`, err));
    }   

    if (redirect) return <Redirect to='/preferences' />
    return (
        <section>
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-elem">
                <label htmlFor="name">Name: </label>
                <input 
                type="text" 
                name="name" 
                placeholder="Name goes here"
                onChange={e => setName(e.target.value)}
                />
            </div>
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
            <input type="submit" value="Signup" />
            </form>
        </section>
    );
}
export default Signup;