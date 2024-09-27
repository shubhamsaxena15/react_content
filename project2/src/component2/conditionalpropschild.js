

function ConditionalPropsChild({isonline}){
    return(
        <div>
            <h1>status</h1>
            <p style={{color:isonline ? "green":"red"}}>
                {isonline ? "online":"ofline"}
            </p>
        </div>
    )
}
export default ConditionalPropsChild