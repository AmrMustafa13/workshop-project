import classes from './Form.module.css'
import { useState } from 'react';

const Form = ({ onLogged, onError, onErrorMessage }) => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (username.length === 0 || password.length === 0) {
            onErrorMessage('You Must Fill All Inputs')
            onError(true);
            return;
        }
        localStorage.setItem('isLogged', '1');
        onLogged(true);
    }

    const handleUserName = e => {
        setUserName(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    return (
        <form className={classes.form} onSubmit={handleFormSubmit} >
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={handleUserName} value={username} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handlePassword} value={password} autoComplete='on' />
            <button type="submit">Login</button>
        </form>
    );
}

export default Form;
