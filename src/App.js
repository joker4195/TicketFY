import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import React from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from './routes/Movies';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sports from './routes/Sports';
import Home from './routes/Home';
import Concerts from './routes/Concerts';
import NavbarComp from './components/NavbarComp';
function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      < Route path="/" element={<Home/>} />
       <Route path="/Concerts" element={<Concerts/>}/>
       <Route path="/Movies" element={<Movies/>}/>
       <Route path="/Sports" element={<Sports/>}/>
    </Routes>
    </BrowserRouter> */}
    <Router>
      <main className="py-3">
          <Routes>
            <Route path='/' element={<Home />} exact />
          </Routes>
      </main>
    </Router>
    {/* <NavbarComp></NavbarComp> */}
    </>
  );
}

export default App;
