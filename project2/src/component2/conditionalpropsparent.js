import ConditionalPropsChild from "./conditionalpropschild"

function ConditionalPropsParent(){
    const isonline = true;

    return(
        <div>
            <h1>User Status</h1>
            <ConditionalPropsChild isonline = {isonline}/>
        </div>
        
    )
}
export default ConditionalPropsParent