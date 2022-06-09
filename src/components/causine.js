import React,{useState, useEffect} from 'react';
import { Link,useParams} from 'react-router-dom';
import Categories from './categories';
import Navbar from './navbar';
import '../style/causine.css';
import { motion } from "framer-motion"

function Causine() {
    
    const [Causine, setCausine] = useState([])
    let params = useParams();
    
    const getcausinedata = async (name) => {
      //  const check = localStorage.getItem(Causine);
     //   if(check){
     //     setCausine(JSON.parse(check))
     //   }else{
        const response  = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=309d9b1fc50f4ddfa9084987405edea5&number=10&cuisine=${name}`);
        const data =await response.json()
      //  localStorage.setItem(Causine, JSON.stringify(data.recipes))
        setCausine(data.results);
        console.log(data.results)
      //}
    }
    useEffect(() => {
      console.log(params.type)
      getcausinedata(params.type);
     }, [params.type]);
   
  return (
    <motion.div animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:0.5}}>
    <Navbar/>
    <div  className='main-causine-container'> 
    
         <div className='causine-name'>
            <h3>Your favourite {params.type} picks</h3>
            <div className='causine-overlay'></div>
        </div>
         <Categories/>
      <div className='causin-container'>
        {Causine.map((causine)=>{
            return(
              <Link to={'/description/'+ causine.id}>
                <div key={causine.id} className='recipe-card2'>
                    <img src={causine.image} alt={causine.title} />
                    <p>{causine.title}</p>
                </div>
                </Link>
            )    
        })}
    </div>
    </div>
    </motion.div>
  )
}

export default Causine