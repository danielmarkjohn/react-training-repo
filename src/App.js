import './App.css';
import {useState, useEffect} from 'react';
import AppChild from './AppChild';

function App() {
const btnName = "PARENT CLICK";

  return (
    <AppChild btnName={btnName}/>
  );
}

export default App;
