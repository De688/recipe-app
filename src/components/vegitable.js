import React,{useState, useEffect} from 'react';
import '../style/vegitable.css';
import {Link} from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import styled from "styled-components";
import { motion } from "framer-motion"



function Vegitable() {
    const Api = 'https://api.spoonacular.com/recipes/random?tags=vegetarian&apiKey=309d9b1fc50f4ddfa9084987405edea5&number=20'
  
    const [vegiterian, setvegiterian] = useState([])
  
     //includes how to store the fetched data in a local storage
    //fist look if there are items in local storage
    const getvegiterian = async () => {
    const check = localStorage.getItem(vegiterian);
    if(check){
      setvegiterian(JSON.parse(check))
    }else{
        const response  = await fetch(Api);
        const data =await response.json()
        //after fetched the data i put them in local storage 
        // we can only install data in string to local storage 
        localStorage.setItem(vegiterian, JSON.stringify(data.recipes))
        setvegiterian(data.recipes);
        console.log(data.recipes)
        
      }
    }
    useEffect(() => {
      getvegiterian();
     }, []);
   
  return (
     <motion.div animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:0.5}}  className='recipe'> 
        <h2>Vegiterian</h2>
        <div>
        <Splide
        options={ {
        pagination:false,
        gap:'5rem',
        perPage:3,
        drag:true
        } }
            >
            {vegiterian.map((vegie) => {
                return (
                <SplideSlide key={vegie.id}>
                
                <Link to={'/description/'+ vegie.id}>
                <div  className='recipe-card2'>
                  <img src={vegie.image } alt={vegie.title} />
                  <p>{vegie.title}</p>
                  <Wrapper/>
                  </div>
                  </Link>
                  
                </SplideSlide>
            )})}
       </Splide>
        </div>
    </motion.div>
  )
}

export default Vegitable;

const Wrapper = styled.div`
      content:'';
      position: absolute;
      z-index: 3;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
`;