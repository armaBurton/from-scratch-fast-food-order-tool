import './App.css';
import { useState } from 'react';
import OrderImages from './OrderImages';
import React from 'react';
import FoodDropdown from './FoodDropdown';
import DrinkDropdown from './DrinkDropdown';
import SideDropdown from './SideDropdown';
import OrderNameInput from './OrderNameInput';
import InstructionForm from './InstructionForm';
import InstructionList from './InstructionList';

const foodArr = [`Burger`, `Ramen`, `Pizza`];
const drinkArr = [`Whiskey`, `Beer`, `Milkshake`];
const sideArr = [`Cake`, `Fries`, `Salad`];

function App() {
  const [foodId, setFoodId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [orderName, setOrderName] = useState(`New Customer`);
  const [instructions, setInstructions] = useState([]);

  return <div className='app'>
    <h1 className='FF-title'>Fast Food Ordering Tool</h1>
    <h3 className='order-for'>Order for {orderName}</h3>
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
    <section className='order-name'>
      {
        <OrderNameInput setOrderName={setOrderName}/>
      }
    </section>
    <section className='instructions-section'>
      <InstructionForm instructions={instructions} setInstructions={setInstructions} />
    </section>
    <section className='instructions-list-section'>
      <ul>
        <InstructionList instructions={instructions} />
      </ul>
    </section>
  </div>;
}

export default App;
