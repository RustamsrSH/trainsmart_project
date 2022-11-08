import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import { API } from './Components/API/API';
import "./App.scss";
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Registraition from './Components/Registration/Registraition';

//test


function App() {

  const [coaches, setCoaches] = useState([]);

  const getCoaches = async () => {
    const request = await fetch(API);
    const response = await request.json();
    setCoaches(response.results);
    console.log(response.results);
  }

    
  useEffect(() => {
    getCoaches();
  },[])

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home coaches={ coaches } />} />
          <Route path='/registration' element={<Registraition />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App;
