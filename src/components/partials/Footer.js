import { Route, Link } from 'react-router-dom'
import About from '../pages/About'

const Footer = (props) => {
  return (
    <footer>
      <Route exact path='/about' component={About} />
      <p>footer @ Here, <Link className="nav-link" to='/about'>Creators</Link></p>
    </footer>
  );
}
export default Footer;