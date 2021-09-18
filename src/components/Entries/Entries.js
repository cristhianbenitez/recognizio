import React from 'react';

const Entries = ({ name, entries }) => {
  return (
    <div className="tc ma5">
      <p className="white f3">
        {name || 'Guest'}, your current entry count is...
      </p>
      <span className="white f1">#{entries || 0}</span>
    </div>
  );
};

export default Entries;
