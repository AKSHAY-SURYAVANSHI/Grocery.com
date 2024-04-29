import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Discover Fresh Finds</h1>
        <p className="explore-menu-text">
        Welcome to our pantry of delights! Explore our wide range of categories, 
        each brimming with enticing ingredients to ignite your culinary creativity. 
        Whether you're craving spices, grains, or condiments, we've got you covered.
        Happy cooking, and may your kitchen adventures be filled with delicious discoveries!
        </p>
        <b>
        Click on any category below to dive into a world of flavors and discover the perfect 
        ingredients for your next culinary masterpiece
        </b>
        <div className="explore-menu-list">
            {menu_list.map((item, index) => (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
                    <p>{item.menu_name}</p>
                </div>
            ))}
        </div>
        <hr/>
    </div>
  );
};

export default ExploreMenu;
