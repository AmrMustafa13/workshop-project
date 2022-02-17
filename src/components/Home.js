import Tours from "./Tours";
import NavBar from "./NavBar";
import classes from './Home.module.css';

const Home = () => {
    return (
        <div className={classes['home-page']}>
            <NavBar />
            <h1 style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', margin: '48px' }}>Choose Your Destination</h1>
            <Tours />
        </div>
    );
}

export default Home;