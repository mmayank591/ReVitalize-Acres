import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Header from './components/Header';
//import React from 'react'

export default function App() {
  return <BrowserRouter>
  <Header/>                   
  {/* //Header  will be present in all the pages below */}
  <Routes>
<Route  path='/'  element={<Home/>}/>
<Route  path='/sign-in'  element={<SignIn/>}/>
<Route  path='/sign-up'  element={<SignUp/>}/>
<Route  path='/about'  element={<About/>}/>
<Route  path='/profile'  element={<Profile/>}/>


  </Routes>
  
  </BrowserRouter>
}