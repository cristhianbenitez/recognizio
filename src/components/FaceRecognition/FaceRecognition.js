import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL, boxes }) => {
  const faceBoxes = boxes;

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='image' src={imageURL} alt='' width='500' height='auto' />
        {imageURL
          ? faceBoxes.map((faceBox) => {
              const { topRow, leftCol, bottomRow, rightCol } = faceBox;
              return (
                <div
                  key={faceBox.index}
                  className='bounding-box'
                  style={{
                    top: topRow,
                    right: rightCol,
                    bottom: bottomRow,
                    left: leftCol,
                  }}
                ></div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default FaceRecognition;
