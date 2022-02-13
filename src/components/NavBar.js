import classes from './NavBar.module.css'

const NavBar = ({ onLogged }) => {

    const handleLogout = () => {
        localStorage.removeItem('isLogged');
        onLogged(false);
    }

    return (
        <div className={classes['nav-bar']}>
            <h1>Travelling App</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default NavBar;