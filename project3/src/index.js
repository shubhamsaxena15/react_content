import React from 'react';
import ReactDOM from 'react-dom/client';
import GoldItemParent from './component/goalitemparent'
import TestingGoldItemParent from './component/testinggoalitemparent'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoldItemParent />
    <TestingGoldItemParent />
  </React.StrictMode>
);


