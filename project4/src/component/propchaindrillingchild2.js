import PropChainDrillingChild3 from "./propchaindrillingchild3";

function PropChainDrillingChild2({message1 ,id}){
    return(
        <PropChainDrillingChild3 message2={message1} id1={id} />
    );
    
};
export default PropChainDrillingChild2;