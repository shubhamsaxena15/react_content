function ChildrenUseChild(props){
    return (
        <>
        <h1>id:{props.id}</h1>
        <li>{props.children}</li>
        </>
        
    )
}
export default ChildrenUseChild;