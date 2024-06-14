import React from 'react';
import './PizzaToppings.css';

const PizzaToppings = ({ toppings, onToppingsChange }) => {
  return (
    <div className="pizza-toppings">
      <h2>Select Toppings <br></br> ($1 each)</h2>
      <label>
        <input type="checkbox" value="pepperoni" checked={toppings.includes('pepperoni')} onChange={onToppingsChange} />
        Pepperoni
      </label>
      <label>
        <input type="checkbox" value="mushrooms" checked={toppings.includes('mushrooms')} onChange={onToppingsChange} />
        Mushrooms
      </label>
      <label>
        <input type="checkbox" value="onions" checked={toppings.includes('onions')} onChange={onToppingsChange} />
        Onions
      </label>
    </div>
  );
};

export default PizzaToppings;
