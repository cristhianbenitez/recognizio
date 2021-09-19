import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import Brain from './brain.png';

export const Logo = () => {
  return (
    <div className="logo ma3 mt3">
      <Tilt
        className="Tilt br2 shadow-2 "
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img
            src={Brain}
            alt="brain"
            style={{
              width: '150px',
              height: '150px',
              paddingTop: '5px'
            }}
          />
        </div>
      </Tilt>
    </div>
  );
};
