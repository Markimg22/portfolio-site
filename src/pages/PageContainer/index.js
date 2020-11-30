import React from 'react';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

export default function PageContainer() {
  return (
    <div className="w3-content w3-margin-top" style={{ width: '1400px' }}>
      <div className="w3-row-padding">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
}