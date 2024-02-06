import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Headers from './Components/Header';
import Series from './series/series'
import Home from './Components/home/Home';


function App() {




  return (
    <div className="App">
   <Router>
 
   <Headers />
    <Routes>

    <Route path="/Series" element={<Series/>} />

      <Route path="/" element={<Login/> } />
      <Route path ="/Home"   element ={<Home/>} /> 
    </Routes>
   </Router>
    </div>
  );
}

export default App;
