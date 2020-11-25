import React from 'react';
import './styles.css';
import LeftColumn from './LeftColumn';

export default function PageContainer() {
  return (
    <div className="w3-content w3-margin-top container">
      <div className="w3-row-padding">
        <LeftColumn />
      </div>
    </div>
  );
}