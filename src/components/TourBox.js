import classes from './TourBox.module.css'
import { Link } from 'react-router-dom';

const TourBox = ({ id }) => {
    return (
        <div className={classes['tour-box']}>
            <h2>ID : {id}</h2>
            <Link to={`/home/${id}`}><button>Book Now</button></Link>
        </div>
    );
}

export default TourBox;