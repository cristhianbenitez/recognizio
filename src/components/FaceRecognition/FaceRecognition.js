import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL, boxes }) => {
  const faceBoxes = boxes;
  const displayFaceBox = faceBoxes.map((faceBox) => {
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
  });

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='image' src={imageURL} alt='' width='500' height='auto' />
        {displayFaceBox}
      </div>
    </div>
  );
};

export default FaceRecognition;
