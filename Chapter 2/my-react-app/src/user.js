// User.js
import React from 'react';

const User = (props) => {
  return (
    <div>
      <h2>User Information:</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default User;
