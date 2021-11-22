import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { originals, action, comedy, romance, horror } from './constants/urls';

function App() {
  return (
    <div className="app">
    <NavBar/>  
    <Banner/>
    <RowPost title ='Netflix  Originals' url ={originals}/>
    <RowPost title ='Action Movies' isSmall  url={action}/>
    <RowPost title ='Comedy Movies' isSmall  url={comedy}/>
    <RowPost title ='Romantic Movies' isSmall  url={romance}/>
    <RowPost title ='Horror Movies' isSmall  url={horror}/>
    </div>
  )
}

export default App;

