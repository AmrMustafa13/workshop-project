import classes from './NavBar.module.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={classes['nav-bar']}>
            <h1>Travelling App</h1>
            <Link to='/'><button>Logout</button></Link>
        </div>
    );
}

export default NavBar;