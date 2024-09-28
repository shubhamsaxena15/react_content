// if we attach this child component with two parent component

function GoldItemChild(props){
    if(props.title&&props.id){
        return(
            <li>tittle:{props.title} (ID: {props.id})</li>
        )
    }else {
        return(
        <li>tittle:{props.title1} (ID: {props.id1})</li>
        )
    }
}



export default GoldItemChild;