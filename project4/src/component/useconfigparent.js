import UseConfigChild from "./useconfigchild";

function UseConfigParent(){
    const data = {href:'https://google.com', download:true};
    return(
        <UseConfigChild {...data} >Please Click This</UseConfigChild>

    )
    
};
export default UseConfigParent;