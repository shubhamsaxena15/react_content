import React from 'react';
import ReactDOM from 'react-dom/client';

// import Parent from './parent';

import Parent from './component1/parent';
import ConditionalPropsParent from './component2/conditionalpropsparent';
import DynamicStyleParent from './component3/dynamicstyleparent';

import EventHandleParent from './component4/eventhandleparent';
import PassingMultiplePropsParent from './component5/passingmultiplepropsparent'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Parent />
    <ConditionalPropsParent />
    <DynamicStyleParent />
    <EventHandleParent />
    <PassingMultiplePropsParent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

