import React from 'react';

const Rank = ({ user, rank }) => {
  return (
    <div className="tc ma5">
      <p className="white f3">{user || 'Guest'}, your current rank is...</p>
      <span className="white f1">#{rank || '0'}</span>
    </div>
  );
};

export default Rank;
