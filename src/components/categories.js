import React from 'react';
import {FaPizzaSlice, FaHamburger, FaCheese} from 'react-icons/fa';
import { GiChopsticks } from "react-icons/gi";
import {NavLink} from 'react-router-dom';
import '../style/categories.css';

function Categories() {

  return (
    <div className='main-div'>
        <div className='div2'>
        <button className='btn-categories' >
              <NavLink to={'/causine/italian'} className='btn-categories2'>
              <FaPizzaSlice className='logo' />
             
              <h5>Italian</h5>
            </NavLink>
        </button>
        <button className='btn-categories'>
        <NavLink to={'/causine/american'} className='btn-categories2'>
           <FaHamburger className='logo'/>
           <h5>American</h5>
           </NavLink>
        </button>
        <button className='btn-categories'>
        <NavLink to={'/causine/thai'} className='btn-categories2'>
           <FaCheese className='logo'/>
           <h5>Thai</h5>
          </NavLink>
        </button>
        <button className='btn-categories'>
        <NavLink to={'/causine/chinese'} className='btn-categories2'>
           <GiChopsticks className='logo'/>
           <h5>Chinese</h5>
          </NavLink>
        </button>
        </div>
    </div>
  )
}

export default Categories;