import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/partials/Header';
import Popup from './components/partials/Popup';


function App() {
  // current user
  const [currentUser, setCurrentUser] = useState(null);
  // isAuthenticated - boolean
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = user => {
    console.log('handling Authentication ... ');
    if(user) {
      // add use stuff
      setCurrentUser(user);
      setIsAuthenticated(true);
    } else {
      // Clear it all out
      setCurrentUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('jwtToke');
    }
  }
  // --------------------------------------------------------popup function 

  const [friendsReq, setFriendsReq] = useState(false);

  let showPop = friendsReq ?
    <Popup
      currentUser={currentUser}
      handleAuth={handleAuth}
      friendsReq={friendsReq}
      setFriendsReq={setFriendsReq}
    />
  :
    <>
    </>


  return (
    <Router>
      <div className="App">
        <Header 
          currentUser={currentUser} 
          handleAuth={handleAuth} 
        />
        {showPop}
        <Content 
          currentUser={currentUser}
          isAuthenticated={isAuthenticated}
          handleAuth={handleAuth}
        />
      </div>
    </Router>
    );
}

export default App;
