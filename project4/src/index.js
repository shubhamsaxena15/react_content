import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ChildrenUseParent from './component/childrenuseparent'
import DirectAceessParent from './component/directaccessparent'
import CombinePropsChildrenParent from './component/combinepropschildrenparent'
import UseConfigParent from './component/useconfigparent'
import PropChainDrillingParent from './component/propchaindrillingparent'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ChildrenUseParent />
    <DirectAceessParent />
    <CombinePropsChildrenParent />
    <UseConfigParent />
    <PropChainDrillingParent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

