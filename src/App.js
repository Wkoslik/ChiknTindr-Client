import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/partials/Header';

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

  return (
    <Router>
      {/* TODO remove div, and add some styling */}
      <div className="App">
        <Header 
          currentUser={currentUser} 
          handleAuth={handleAuth} 
        />
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
