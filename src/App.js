import './App.css';
import { useState } from 'react';
import OrderImages from './OrderImages';
import React from 'react';
import FoodDropdown from './FoodDropdown';
import DrinkDropdown from './DrinkDropdown';
import SideDropdown from './SideDropdown';

function App() {
  const [foodId, setFoodId] = useState(1);
  const foodArr = [`Burger`, `Ramen`, `Pizza`];

  const [drinkId, setDrinkId] = useState(1);
  const drinkArr = [`Whiskey`, `Beer`, `Milkshake`];

  const [sideId, setSideId] = useState(1);
  const sideArr = [`Cake`, `Fries`, `Salad`];

  return <div className='app'>
    <h1 className='FF-title'>Fast Food Ordering Tool</h1>
    <OrderImages 
      foodId={foodId}
      foodArr={foodArr}
      drinkId={drinkId}
      drinkArr={drinkArr}
      sideId={sideId}
      sideArr={sideArr} 
    />

    <section className='dropdown-section'>
      <div>
        <FoodDropdown setFoodId={setFoodId} foodArr={foodArr} />
      </div>
      <div>
        <DrinkDropdown setDrinkId={setDrinkId} drinkArr={drinkArr} />
      </div>
      <div>
        <SideDropdown setSideId={setSideId} sideArr={sideArr} />
      </div>
    </section>
  </div>;
}

export default App;
