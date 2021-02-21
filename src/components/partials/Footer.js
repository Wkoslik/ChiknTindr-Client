import { Route, Link } from 'react-router-dom'
import About from '../pages/About'

const Footer = (props) => {
  return (
    <footer>
      <Link className="nav-link" to='/about'>Meet the RESTaurateurs!</Link>
      <div>
      {/* TODO get images of everyone */}
        <a href="https://www.linkedin.com/in/youngsang-kim/" target="_blank"><img src='' alt='Youngsang Kim' /></a>
        <a href="https://www.linkedin.com/in/wkoslik/" target="_blank"><img src='' alt='Whitney Koslik' /></a>
        <a href="https://www.linkedin.com/in/seanmichael-feiner/" target="_blank"><img src='' alt='Sean Feiner' /></a>
      </div>
    </footer>
  );
}
export default Footer;

