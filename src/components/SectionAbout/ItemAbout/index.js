import React from 'react';

export default function ItemAbout({ iconName, itemName }) {
  return (
    <div>
      <p>
        <i className={`fa fa-${iconName} fa-fw w3-margin-right w3-large w3-text-teal`}></i>
        {itemName}
      </p>
    </div>
  );
}