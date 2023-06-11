import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header, Footer} from './components'
import { HomePage, Shop, About, Login, Register, Reset } from './pages';


import './App.css';

//import HomePage from './components/homepage';

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={ <HomePage/>} />
          <Route path='/about' element={ <About/>} />
          <Route path='/shop' element={ <Shop/>} />
          <Route path='/login' element={ <Login/>} />
          <Route path='/register' element={ <Register/>} />
          <Route path='/reset' element={ <Reset/>} />
          
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
    /*<div className="App">
      <HomePage />
    </div>*/
  );
}

export default App;
