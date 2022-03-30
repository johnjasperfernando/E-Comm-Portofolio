import './App.css';
import HomePage from './components/pages/homepage/homepage.component';
import {Route, Routes  } from 'react-router-dom';
import React from 'react';
import ShopPage from './components/pages/Shop/shoppage.component'


function App() {
  return (
    <div>
      <Routes >
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/shops' element={<ShopPage/>}/>
      </Routes >
    </div>
  );
}

export default App;
 