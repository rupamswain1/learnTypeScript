import React from 'react';
import { GuestList } from './state/GuestList';
import UserSearch from './state/UserSearch';
import { EventComponent } from './events/Events';
import UserSearchUsingRefs from './refs/UserSearchUsingRefs';
function App() {
  return (
    <div className="App">
      <GuestList/>
      <br/>
      <hr></hr>
      <UserSearch/>
      <br/>
      <hr></hr>
      <EventComponent/>
      <br/>
      <hr></hr>
      <UserSearchUsingRefs/>
    </div>
  );
}

export default App;
