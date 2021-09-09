import React from 'react';

const FaceRecognition = ({ imageURL }) => {
  return (
    <div className='center'>
      {imageURL ? <img src={imageURL} alt='face-recognition' /> : null}
    </div>
  );
};

export default FaceRecognition;
