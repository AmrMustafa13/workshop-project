import TourBox from './TourBox'
import classes from './Tours.module.css'

const Tours = () => {
    let tourBoxes = [];
    for (let i = 0; i < 30; i++) {
        tourBoxes.push(<TourBox id={i + 1} key={i} />)
    }
    return (
        <div className={classes['tours-container']}>
            {tourBoxes}
        </div>
    );
}

export default Tours;