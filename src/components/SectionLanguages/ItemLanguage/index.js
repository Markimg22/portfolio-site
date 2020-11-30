import React from 'react';

export default function ItemLanguage({ itemName, percentageItem }) {
  return (
    <div>
      <p>{itemName}</p>
      <div className="w3-light-grey w3-round-xlarge">
        <div className="w3-round-xlarge w3-teal" style={{ height: '24px', width: percentageItem }}></div>
      </div>
    </div>
  );
}