import React from 'react';
import ReactDOM from 'react-dom/client';
import GoldItemParent from './component/goalitemparent'
import TestingGoldItemParent from './component/testinggoalitemparent'
import App from './component/childrenpropparent'
import HandlingMultipleChildrenParent from './component/handlingmultiplechildrenparent'
import ReactChildrenMapUtilityParent from './component/reactchildrenmaputilityparent'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoldItemParent />
    <TestingGoldItemParent />
    <App />
    <HandlingMultipleChildrenParent />
    <ReactChildrenMapUtilityParent />
  </React.StrictMode>
);


