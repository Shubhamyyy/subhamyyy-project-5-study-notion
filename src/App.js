import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
import Testimony from './pages/Testimony';
import About from './pages/About';

function App() {

  const [isLoggedIn,setIsLoggedIn]=useState(false);

  return (
    <div className="w-screen h-screen overflow-auto bg-richblack-700 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="testimony" element={<Testimony></Testimony>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="login" element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
        <Route path="signup" element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>
        <Route path="dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn} >
            <Dashboard></Dashboard>
          </PrivateRoute>
          }></Route>
      </Routes>
    </div>
  );
}

export default App;
