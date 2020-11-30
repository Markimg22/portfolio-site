import React from 'react';

export default function HeaderSections({ titleSize='large', iconName, titleHeader, isBold=false }) {
  return (
    <header>
      <h2 className={`w3-${titleSize}`}>
        <i className={`fa fa-${iconName} fa-fw w3-margin-right w3-text-teal`}></i>
        {isBold ? <strong>{titleHeader}</strong> : titleHeader}
      </h2>
    </header>
  );
}