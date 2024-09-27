/* Default Props
You can also set default props for a component in case no props are provided: */
DefaultProps.defaultProps={
    name : "jonny",
    age: "56",
    address : "we dont know",
    newvar : "This is new variable which is not defined in parent component"



}


function DefaultProps(props){
    return(
        <div>
            <h1>Default Props Data</h1>
            <p>name:{props.name}</p>
            <p>age: {props.age}</p>
            <p>address:{props.address}</p>
            <p>mail:{props.mail}</p>
            <p>newcar:{props.newvar}</p>
        </div>
    );
};
export default DefaultProps