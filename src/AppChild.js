import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from './constants';
import DataTable from './components/DataTable';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function AppChild(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(apiURL)
      .then(response => {
        setData(response.data); // Store Response in Data
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        {loading ?
          (<Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>) : (<DataTable data={data} />)}
      </header>
    </div>
  );
}

export default AppChild;
