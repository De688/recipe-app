import React,{useState,useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import Categories from './categories';
import Form from './form';
import { motion } from "framer-motion"

function Searched() {
    
    const [Searched, setSearched] = useState([]);
    let params = useParams()
    const getsearcheddata = async (name) => {
     
      const response  = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=309d9b1fc50f4ddfa9084987405edea5&number=20&query=${name}`);
      const data =await response.json()
      //localStorage.setItem(Searched, JSON.stringify(data.reults))
      setSearched(data.results);
      console.log(data);
    }
  
  useEffect(() => {
    console.log(params.search)
    getsearcheddata(params.search);
   }, [params.search]);
 
  return (
   <motion.div animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:0.5}}>
    <Form/>
    <Categories/>
         <h2 className='causine-name'> Your favourite {params.search} picks</h2>
      <div className='causin-container'>
        {Searched.map((searched)=>{
            return(
              <Link to={'/description/'+ searched.id}>
                <div key={searched.id} className='recipe-card2'>
                    <img src={searched.image} alt={searched.title} />
                    <p>{searched.title}</p>
                </div>
              </Link>
            )    
        })}
    </div>
    </motion.div>
    
  )
}

export default Searched;