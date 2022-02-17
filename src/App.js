import Form from './components/Form'
import Home from './components/Home'
import TourDetails from './components/TourDetails'
import ProtectedRoute from './ProtectedRoute'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path='/home' element={<Home />} />
            <Route path='/home/:id' element={<TourDetails />} />
          </Route>
          <Route path='/' element={<Form />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;