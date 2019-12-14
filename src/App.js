import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
// import Login from './components/login/login';
// import Signup from './components/signup/signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <p>hi</p> */}
        {/* <Login></Login> */}
        {/* <Signup></Signup> */}
        <Header></Header>
        <Main></Main>
      </div>
    </BrowserRouter>
  );
}

export default App;
