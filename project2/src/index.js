import React from 'react';
import ReactDOM from 'react-dom/client';

// import Parent from './parent';

import Parent from './component1/parent';
import ConditionalPropsParent from './component2/conditionalpropsparent';
import DynamicStyleParent from './component3/dynamicstyleparent'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Parent />
    <ConditionalPropsParent />
    <DynamicStyleParent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

