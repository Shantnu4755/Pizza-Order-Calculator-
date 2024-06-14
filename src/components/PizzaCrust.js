import React from 'react';
import './PizzaCrust.css';

const PizzaCrust = ({ crust, onCrustChange }) => {
  return (
    <div className="pizza-crust">
      <h2>Select Pizza Crust</h2>
      <select value={crust} onChange={onCrustChange}>
        <option value="thin">Thin</option>
        <option value="thick">Thick (+$2)</option>
        <option value="gluten-free">Gluten-Free (+$3)</option>
      </select>
    </div>
  );
};

export default PizzaCrust;
