import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/header'
import GoalItemParent from './component/goalitemparent'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <GoalItemParent />
  </React.StrictMode>
);

