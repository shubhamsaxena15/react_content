/* "Prop drilling" refers to the process of passing props through multiple layers of components, 
even if some of those intermediate components don’t need the props themselves. 
This can lead to unnecessary complexity and makes the components tightly coupled. */

/* Prop Chain: Refers to the passing of props down a hierarchy of components.
Prop Drilling: Refers to the unnecessary passing of props through components 
that do not need them, which can lead to code that is harder to maintain. */

// Alternatives to Prop Drilling

/* To avoid prop drilling, you can use state management libraries (like Redux or Context API) 
that allow you to access state and props from anywhere in your component tree without having 
to pass them through every level.
 */

import PropChainDrillingChild1 from "./propchaindrillingchild1";

function PropChainDrillingParent(){
    return(
        <PropChainDrillingChild1 message="hello How are you" />
    );
};

export default PropChainDrillingParent;