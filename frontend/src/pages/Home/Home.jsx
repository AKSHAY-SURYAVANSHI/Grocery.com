import React, { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Header from '../../components/Header/Header'
import './Home.css'

const Home = () => {

  const [category,setCategory] = useState('All');
  return (
    <div>
      <Header/>   
      <ExploreMenu category={category} setCategory={setCategory}/>  
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
