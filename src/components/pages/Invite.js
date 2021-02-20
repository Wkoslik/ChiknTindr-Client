import { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Invite = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // TODO: add from password verification
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = e => {
      e.preventDefault();
      // TODO Commented out until we get the connection with the DB
      axios.post(
          // `${process.env.REACT_APP_SERVER_URL}/api/signup`,
          // { name, email }
          console.log('POST REQ')
      ).then(response => {
          console.log(response.data)
          setRedirect(true);
      }).catch(err => console.log(`😖 error`, err));
  }   

  if (redirect) return <Redirect to='/restaurants' />
  return (
    <div>
      <h3>Invite Friends Page</h3>
      <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input 
                type="text" 
                name="name" 
                placeholder="Name goes here"
                onChange={e => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input
                type="email"
                name="email"
                placeholder="email goes here"
                onChange={e => setEmail(e.target.value)}
                />
            </div>
            <input type="submit" value="Send Invite" />
            </form>
    </div>
  );
}
export default Invite;