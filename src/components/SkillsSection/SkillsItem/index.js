import React from 'react';

export default function SkillsItem({ skillName, skillScore }) {
  const widthScore = {
    width: skillScore
  };

  return (
    <div>
      <p>{skillName}</p>
      <div className="w3-light-grey w3-round-xlarge w3-small">
        <div className="w3-container w3-center w3-round-xlarge w3-teal" style={widthScore}>
          <div className="w3-center w3-text-white">{skillScore}</div>
        </div>
      </div>
    </div>
  );
}