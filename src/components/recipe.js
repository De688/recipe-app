import React, {useEffect, useState} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '../style/recipe.css';
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom';


function Recipes() {
    const Api = 'https://api.spoonacular.com/recipes/random?apiKey=309d9b1fc50f4ddfa9084987405edea5&number=20'
  
    const [Recipes, setRecipes] = useState([])
  
     //includes how to store the fetched data in a local storage
    //fist look if there are items in local storage
    const getrecipedata = async () => {
    const check = localStorage.getItem(Recipes);
    if(check){
      setRecipes(JSON.parse(check))
    }else{
        const response  = await fetch(Api);
        const data =await response.json()
        //after fetched the data i put them in local storage 
        // we can only install data in string to local storage 
        localStorage.setItem(Recipes, JSON.stringify(data.recipes))
        setRecipes(data.recipes);
        console.log(data.recipes)
        
      }
    }
    useEffect(() => {
      getrecipedata();
     }, []);
   

  return (
    <section className='recipe'>
        <h1>All recipes</h1>
        <Splide
    options={ {
    pagination:false,
    gap:'5rem',
    perPage:4
  } }
>
            {Recipes.map((recipe) => {
                return (
                <SplideSlide key={recipe.id}>
                <div  className='recipe-card' >
                  <Link to={'/description/'+ recipe.id} className='recipe-card-link'>
                  <img src={recipe.image !== 'N/A' ? recipe.image : 'https://via.placeholder.com/400'} alt={recipe.title} />
                  <p>{recipe.title}</p>
                  </Link>
                </div>
                </SplideSlide>
            )})}
          
       </Splide>
    </section>
  )
}

export default Recipes;