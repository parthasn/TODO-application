import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import { Routes } from './components/Routes';
import Styles from "./components/all.module.css"



function App() {
  return (
    <div className={Styles.container}>
      <Navbar/>
      <Routes/>
    </div>
  );
}

export default App;
