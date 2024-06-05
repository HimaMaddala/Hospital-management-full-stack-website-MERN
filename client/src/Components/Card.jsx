import React from 'react';
import './Card.css';
const Card = ({ title, value }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', margin: '10px', width: '200px', textAlign: 'center',backgroundColor:'whitesmoke' }}>
      <h3>{title}</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{value}</p>
    </div>
  );
};

export default Card;
