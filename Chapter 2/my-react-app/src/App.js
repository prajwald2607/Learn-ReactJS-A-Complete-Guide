// App.js
import React from 'react';
import User from './user'; 

const App = () => {
  return (
    <div>
      <h1>Props Example</h1>
      {/* Sending props to the User component */}
      <User name="John Doe" age={25} />
    </div>
  );
}

export default App;