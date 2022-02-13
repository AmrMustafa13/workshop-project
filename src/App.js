import Form from './components/Form'
import Home from './components/Home'
import Modal from './components/Modal'
import { useState, useEffect } from 'react'
import './App.css'

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const storedLoggedInData = localStorage.getItem('isLogged');
    if (storedLoggedInData === '1') setIsLoggedIn(true);
  }, []);

  return (
    <div className='App'>
      {(isLoggedIn) ? <Home onLogged={setIsLoggedIn} /> : <Form onLogged={setIsLoggedIn} onError={setError} onErrorMessage={setErrorMessage} />}
      {error && <Modal message={errorMessage} onError={setError} />}
    </div>
  );
}


export default App;