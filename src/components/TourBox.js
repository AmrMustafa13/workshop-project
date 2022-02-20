import classes from './TourBox.module.css'
import { Link } from 'react-router-dom';

const TourBox = ({ id }) => {
    return (
        <div className={classes['tour-box']}>
            <img src='https://media.istockphoto.com/photos/mosque-and-pyramids-picture-id1174818077?k=20&m=1174818077&s=612x612&w=0&h=vAutxzWDTokCJkf6010sguiHP6yc8Nzt8qePG9DEew0=' alt='country-image' />
            <h2>Egypt</h2>
            <Link to={`/home/${id}`}><button>Book Now</button></Link>
        </div>
    );
}

export default TourBox;