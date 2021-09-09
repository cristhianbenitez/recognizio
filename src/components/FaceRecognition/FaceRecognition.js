import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageURL, boxes }) => {
  const faceBoxes = boxes;

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='image' src={imageURL} alt='' width='500' height='auto' />
<<<<<<< HEAD
        {boxes
=======
        {imageURL
>>>>>>> ea0874db4038ac3bdc6326b59e3d08e355933cd2
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
