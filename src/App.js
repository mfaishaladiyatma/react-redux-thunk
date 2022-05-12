import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <>
    <div className='App'>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/user_detail'}>User Detail</Link>
          </li>
          <li>
            <Link to={'/login'}>Login</Link>
          </li>
          <li>
            <Link to={'/register'}>Register</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='user_detail' element={<UserDetail />}></Route>
        </Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
