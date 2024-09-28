
/* In this example, the Box component accepts children, which allows you to pass any React elements to it. 
The children prop can contain text, other components, or a mix of both */


const Box = ({ children }) => {
    return (
      <div style={{ border: '1px solid black', padding: '10px' }}>
        {children}
      </div>
    );
  };


  /* function Box(props){
    return(
      <div style={{ border: '1px solid black', padding: '10px' }}>
        <li>{props.item}</li>
      </div>

    )
  } */

export default Box;