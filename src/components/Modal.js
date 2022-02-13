import classes from './Modal.module.css'

const Modal = ({ message, onError }) => {

    const handleClick = (e) => {
        if (!e.target.classList[0].includes('overlay'))
            onError(false);
    }


    return (
        <div className={classes.modal} onClick={handleClick}>
            <div className={classes['modal-overlay']}>
                {message}
            </div>
        </div>
    );
}

export default Modal;