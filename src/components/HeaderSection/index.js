import React from 'react';

export default function HeaderSection({ iconName, nameSection }) {
  return (
    <header>
      <p className="w3-large">
        <strong>
          <i className={`fa fa-${iconName} fa-fw w3-margin-right w3-text-teal`}></i>
          {nameSection}
        </strong>
      </p>
    </header>
  );
}