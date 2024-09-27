function Child(props){
    return(
        <div>
            <h1>Child Component</h1>
            <p>names: {props.name}</p>
            <p>age:{props.age}</p>

        </div>
        

    );
};
export default Child

/* other method
const Child = ({ name, age }) => {
    return (
      <div>
        <h2>Child Component</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  }; */