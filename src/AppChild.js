import './App.css';
import {useState, useEffect} from 'react';

function AppChild(props) {
  // useState
  const [btnName, setBtnName] = useState('Click Here');

// triggering useEffect = btnName
useEffect(() => {
    console.log(props);
}, [])

const handleClick = () => {
  alert("Button has been clicked");
};

const handleInput = (e) => {
  setBtnName(e.target.value);
  console.log("Input Text", e.target.value);
 }

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={handleInput}/><br/>
        <button className="btn-primary" onClick={handleClick}>{btnName}</button>
        <button className="btn-primary" >{props.btnName}</button>

      </header>
    </div>
  );
}

export default AppChild;
