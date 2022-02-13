import User from './User'
import classes from './Users.module.css'

const Users = () => {
    return (
        <div className={classes['users-container']}>
            <User />
            <User />
            <User />
            <User />
            <User />
        </div>
    );
}

export default Users;