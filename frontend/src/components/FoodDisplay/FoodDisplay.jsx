import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'

const FoodDisplay = ({ category }) => { // Destructure category from props

    const { food_list } = useContext(StoreContext)

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Picks near you</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <FoodItem
                                key={index}
                                id={item._id}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                                image={item.image}
                            />
                        );
                    }
                    return null; 
                })}
            </div>
        </div>
    )
}

export default FoodDisplay
