import DynamicStyleChild from "./dynamicstylechild"

function DynamicStyleParent(){
    return(
        <div>
            <h1> box style by dynamic style</h1>
            <DynamicStyleChild size= 'small'/>
            <DynamicStyleChild size = 'large'/>
        </div>
    );

};
export default DynamicStyleParent;