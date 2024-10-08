/* In this example, each child is rendered inside a button element. 
The React.Children.map function allows you to iterate over the children and modify how they are displayed. */

import React from 'react';

function ReactChildrenMapUtilityChild({children}){
    return(
        <div>
            {React.Children.map(children, (child) => (
        <button style={{ margin: '5px'} }>{child}</button>
        
        ))}
        </div>
    )
}       
        /*
        function ReactChildrenMapUtilityChild(props){
        return(  
        <div>
            <button style={{margin:'5px'}}>{props.button}</button>
        </div> 
        )
        */
export default ReactChildrenMapUtilityChild;