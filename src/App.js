import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Concerts from './routes/Concerts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Movies from './routes/Movies';
import Sports from './routes/Sports';
import Login from './routes/Login';
import NavbarComp from './components/NavbarComp';
function App() {
  return (
    
     
    
    <Router>
            
       
          <Routes>
            {/* <Route path='/' element={< />} exact /> */}
            <Route path='/' element={<Concerts />} exact />
            <Route path='/login' element={<Login />} exact />
            <Route path='/movies' element={<Movies />} exact />
            <Route path='/sports' element={<Sports />} exact />
          {/* <Footer></Footer>  */}
          </Routes>
       
      </Router>

  

      
   
  

  );
}

export default App;
