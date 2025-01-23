import React from 'react';

const Child = ({ myData }) => {  
  const { name, age, location, bio } = myData;  

  return (
    <div>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>location: {location}</p>
      <p>bio: {bio}</p>
    </div>
  );
};

export default Child;
