import React from 'react';
import American from './american';
import Categories from './categories';
import Chinesse from './chinesse';
import Italian from './italian';
import Navbar from './navbar';
import Recipes from './recipe';
import Vegitable from './vegitable';
import Form from './form';
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:0.5}}>
        <Navbar/>  
        <Form/>
        <Categories/>
        <Recipes/>
        <Vegitable/>
    </motion.div>
  )
}

export default Home;