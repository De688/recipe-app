import React,{useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import '../style/forms.css';
import {useNavigate} from 'react-router-dom';

function Form() {
  const [Searched, setSearched] = useState('')
  const navigate = useNavigate()
  const searchHandler = (e) =>{
    e.preventDefault();
    navigate('/searched/'+ Searched)
  }

  return (
    <div className='search'>
        <input value={Searched} onChange={(e)=>setSearched(e.target.value)} type='text' placeholder='what is your favorite...' className='input'/> 
        <FaSearch className='search-logo' onClick={searchHandler}/>
   </div>
  )
}

export default Form;