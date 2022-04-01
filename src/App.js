import './App.css';
import HomePage from './components/pages/homepage/homepage.component';
import {Route, Routes  } from 'react-router-dom';
import React from 'react';
import ShopPage from './components/pages/Shop/shoppage.component'
import Header from './components/header/header.component'; 
import SingInAndSingUp from './components/signInAndSingUp/SignInAndSingOut.Component';

function App() {
  return (
    <div>
      <Header/>
      <Routes >
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/shops' element={<ShopPage/>}/>
        <Route exact path='/singin' element={<SingInAndSingUp/>}/>
      </Routes >
    </div>
  );
}

export default App;
 

