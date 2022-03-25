import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import '../style/description.css'
import {motion} from 'framer-motion';

function Description() {
    let params = useParams();

    const [recipeinfo, setrecipeinfo] = useState({})
    const [Active, setACtive] = useState('instructions');

    const Isinstructionsbtn =()=>{
        if(Active != "instructions"){
            setACtive("instructions")
        }
    }
    const Isingredientsbtn =()=>{
        if(Active!= "ingredients"){
            setACtive("ingredients")
        }
    }

    const searchInfo = async () => {
        const response = await fetch(` https://api.spoonacular.com/recipes/${params.id}/information?apiKey=309d9b1fc50f4ddfa9084987405edea5`);
        const data = await response.json()
        setrecipeinfo(data);
        console.log(data)
    }
    useEffect(()=>{
        searchInfo()
    },[params.id])
    
  return (
    <motion.div animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:0.5}} className='main-container'>
        <div className='right-sidecontainer'>
            <h4>{recipeinfo.title}</h4>
            <img src={recipeinfo.image} alt={recipeinfo.title}/>
        </div>
        <div className='left-sidecontainer'>
            <div className='btn-container'>
                <button className={Active === 'instructions' ? 'isactive' : 'notActive'} onClick={()=>{Isinstructionsbtn()}}>
                    Description
                </button>
                <button className={Active === 'ingredients' ? 'isactive' : 'notActive'} onClick={()=>{Isingredientsbtn()}}>
                    Ingredients
                </button>
            </div>
            {Active === 'instructions' && <div className='instru'>
              
              <h4 dangerouslySetInnerHTML={{__html:recipeinfo.summary}}></h4>
              <h4 dangerouslySetInnerHTML={{__html:recipeinfo.instructions}}></h4>
          </div> }
            {Active === 'ingredients' && <div className='main-ingredients'>
                <h2>Original Ingredients</h2>
                <ul className='ingredients-list'>
            {recipeinfo.extendedIngredients.map((ingr) =>
                  <li key={ingr.id}>{ingr.original}</li>
                )}
            </ul>
            </div>}
            
        </div>
    </motion.div>
  )
}

export default Description

/*the two lines above removing html tags from text*/