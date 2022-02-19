import React from 'react';
import {Provider} from 'react-redux';
import {store} from './state';
import RepositoryList from './components/RepositoryList';

function App() {
  return (
   <Provider store={store}>
     <div>
       <h1>Search for NPM Package</h1>
       <RepositoryList/> 
     </div>
   </Provider>
  );
}

export default App;
