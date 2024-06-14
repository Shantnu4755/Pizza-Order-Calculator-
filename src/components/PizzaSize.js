import React from 'react';
import './PizzaSize.css';

const PizzaSize = ({ size, onSizeChange }) => {
  return (
    <div className="pizza-size">
      <h2>Select Pizza Size</h2>
      <label>
        <input type="radio" value="small" checked={size === 'small'} onChange={onSizeChange} />
        Small ($8)
      </label>
      <label>
        <input type="radio" value="medium" checked={size === 'medium'} onChange={onSizeChange} />
        Medium ($10)
      </label>
      <label>
        <input type="radio" value="large" checked={size === 'large'} onChange={onSizeChange} />
        Large ($12)
      </label>
    </div>
  );
};

export default PizzaSize;
