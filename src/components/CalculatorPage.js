import React, { useState } from 'react';
import PizzaSize from './PizzaSize';
import PizzaToppings from './PizzaToppings';
import PizzaCrust from './PizzaCrust';
import PriceDisplay from './PriceDisplay';
import './CalculatorPage.css';

const CalculatorPage = () => {
  const [size, setSize] = useState('');
  const [toppings, setToppings] = useState([]);
  const [crust, setCrust] = useState('');
  const [price, setPrice] = useState(0);

  const handleSizeChange = (e) => {
    const size = e.target.value;
    setSize(size);
    calculatePrice(size, toppings, crust);
  };

  const handleToppingsChange = (e) => {
    const topping = e.target.value;
    setToppings((prevToppings) =>
      prevToppings.includes(topping)
        ? prevToppings.filter((t) => t !== topping)
        : [...prevToppings, topping]
    );
    calculatePrice(size, [...toppings, topping], crust);
  };

  const handleCrustChange = (e) => {
    const crust = e.target.value;
    setCrust(crust);
    calculatePrice(size, toppings, crust);
  };

  const calculatePrice = (size, toppings, crust) => {
    let price = 0;
    if (size === 'small') price += 8;
    if (size === 'medium') price += 10;
    if (size === 'large') price += 12;
    price += toppings.length * 1;
    if (crust === 'thin') price += 0;
    if (crust === 'thick') price += 2;
    if (crust === 'gluten-free') price += 3;
    setPrice(price);
  };

  return (
    <div className="calculator-page">
      <h1>Pizza Order Calculator</h1>
      <PizzaSize size={size} onSizeChange={handleSizeChange} />
      <PizzaToppings toppings={toppings} onToppingsChange={handleToppingsChange} />
      <PizzaCrust crust={crust} onCrustChange={handleCrustChange} />
      <PriceDisplay price={price} />
      <button className="order-button">Order Pizza</button>
    </div>
  );
};

export default CalculatorPage;
