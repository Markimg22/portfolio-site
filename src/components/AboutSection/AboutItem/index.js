import React from 'react';

export default function AboutItem({ iconName, info }) {
  return (
    <p>
      <i className={`fa fa-${iconName} fa-fw w3-margin-right w3-large w3-text-teal`}></i>
      {info}
    </p>
  );
}