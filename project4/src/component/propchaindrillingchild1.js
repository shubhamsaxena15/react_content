import PropChainDrillingChild2 from "./propchaindrillingchild2";

function PropChainDrillingChild1({message}){
    return(
        <PropChainDrillingChild2 message1={message} id="one" />
    )
    
};
export default PropChainDrillingChild1;