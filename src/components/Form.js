import classes from './Form.module.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(username.includes('@') && password.length > 8)
        }, 300);
        return () => {
            clearTimeout(identifier);
        }
    }, [username, password])

    return (
        <form className={classes.form} >
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={e => setUserName(e.target.value)} value={username} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password} autoComplete='on' />
            <div className={(formIsValid) ? classes.valid : undefined} id={classes['submit-btn']}>
                <Link to='/home'><button type="submit">Login</button></Link>
            </div>
        </form >
    );
}

export default Form;
