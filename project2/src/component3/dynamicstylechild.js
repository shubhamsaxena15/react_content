

function DynamicStyleChild({size}){

        const boxstyle={
        width: size === 'large'? "200px":"100px",
        height: size==='large'? "200px":"100px",
        backgroundColor : "blue",
        margin: '10px',
        };

        return(
            <div style={boxstyle}></div>
        );
    
};
export default DynamicStyleChild;