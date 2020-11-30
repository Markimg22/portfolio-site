import React from 'react';

export default function ItemSkill({ itemName, percentageSkill }) {
  return (
    <div>
      <p>{itemName}</p>
      <div className="w3-light-grey w3-round-xlarge w3-small">
        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: percentageSkill }}>
          {percentageSkill}
        </div>
      </div>
    </div>
  );
}