import React from 'react';
import './FaceRecognition.css';

export const FaceRecognition = ({ imageURL, boxes }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="image" src={imageURL} alt="" width="500" height="auto" />
        {boxes.length > 1
          ? boxes.map((faceBox) => {
              const { topRow, leftCol, bottomRow, rightCol } = faceBox;
              return (
                <div
                  key={Math.random()}
                  className="bounding-box"
                  style={{
                    top: topRow,
                    right: rightCol,
                    bottom: bottomRow,
                    left: leftCol
                  }}
                ></div>
              );
            })
          : null}
      </div>
    </div>
  );
};
