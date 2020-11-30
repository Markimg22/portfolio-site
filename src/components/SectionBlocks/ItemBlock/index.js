import React from 'react';

export default function ItemBlock({ info }) {
  return (
    <div className="w3-container">
      <h5 className="w3-opacity">
        <strong>
          {info.title} | {info.company}
        </strong>
      </h5>
      <h6 className="w3-text-teal">
        <i className="fa fa-calendar fa-fw w3-margin-right"></i>
        {info.date.start} - {info.date.end ? info.date.end : <span className="w3-tag w3-teal w3-round">Current</span>}
      </h6>
      <p>{info.details}</p>
    </div>
  );
}