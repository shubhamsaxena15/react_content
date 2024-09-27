import React from 'react';
import Child from './child';
import Child1 from "./child1"
import Child2 from "./child2"
import DefaultProps from "./defaultprops"


function Parent(){
  const name = "james";
  const age = 40;
  const address = "xyz is the address of clint";
  const mail = "abc@maildff.co";


return(
  <div>
    <h1>Parent Component</h1>
    <Child name={name} age={age}/>
    <Child1 name={name} age={age}/>
    <Child2 address1={address} mail1={mail}/>
    <DefaultProps age={age}/>
  </div>
)
}


export default Parent;
