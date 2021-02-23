import { Redirect, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Restaurants from './pages/Restaurants';
import Preference from './pages/Preference';
import Invite from './pages/Invite';
import InstanceList from './pages/InstanceList';
import Result from './pages/Result';
import About from './pages/About'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('jwtToken');
    return <Route {...rest} render={(renderProps) => (
        token ?
            <Component {...rest} {...renderProps} /> :
            <Redirect to='/auth/login' />
    )} />
}

const Content = (props) => {
    return (
        //TODO: include handleAuth to restaurant, Preference, Invite, Infocard, Notice, Result
        //TODO: commented out infocard because that's being rendered within restaurants so props will pass through restaurants to infocard
    <main>
        <Route exact path='/' component={Home} />
        <Route path='/preferences' component={Preference} />
        <Route path='/invite' component={Invite} />
        <Route path='/restaurants' component={Restaurants} />
        <Route path='/dinnerplans' component={InstanceList} />
        <Route path='/result' component={Result} />
        <Route path='/auth' render={(renderProps) => (
            <Auth handleAuth={props.handleAuth} {...renderProps} />
        )} />
        <Route exact path='/about' component={About} />
        <PrivateRoute 
            path='/profile' 
            component={Profile} 
            currentUser={props.currentUser} 
            handleAuth={props.handleAuth}
        />
    </main>
    );
}
export default Content;
