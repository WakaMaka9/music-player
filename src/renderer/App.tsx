import { Provider } from 'react-redux';
import React from 'react';
import './App.css';
import store from './store';
import { MainWrapper } from './MainWrapper';


export default function App() {
  return (
    <Provider store={store}> 
      <React.StrictMode>
        <MainWrapper />
      </React.StrictMode>
    </Provider>
  )
}
