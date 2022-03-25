import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Causine from './causine';
import Searched from './searched';
import Description from './description';


//the route of cousine/:type allow the use of params on route tree where
//we go to the link after getting the param type
function Pages() {
  return (
    <div>
         <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/causine/:type' element={<Causine/>}/>
                <Route path='/searched/:search' element={<Searched/>}/>
                <Route path='/description/:id' element={<Description/>}/>
            </Routes>
         </Router>
    </div>
  )
}

export default Pages;