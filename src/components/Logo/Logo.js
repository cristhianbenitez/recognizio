import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import Brain from './brain.png';

export const Logo = () => {
  return (
    <div className="logo ma3 mt3 flex items-center">
      <Tilt
        className="Tilt br2 shadow-2 "
        options={{ max: 25 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner">
          <img
            src={Brain}
            alt="brain"
            style={{
              width: '100px',
              height: '100px',
              paddingTop: '5px'
            }}
          />
        </div>
      </Tilt>
      <span className="pl3 f4 fw8">Recognizio</span>
    </div>
  );
};
