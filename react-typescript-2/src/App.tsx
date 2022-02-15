import React from 'react';
import { GuestList } from './state/GuestList';
import UserSearch from './state/UserSearch';

function App() {
  return (
    <div className="App">
      <GuestList/>
      <div>User Search example</div>
      <br/>
      <hr></hr>
      <UserSearch/>
    </div>
  );
}

export default App;
