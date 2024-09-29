import ChildrenUseChild from './childrenusechild'

function ChildrenUseParent(){
    return(
        <ChildrenUseChild id="one">
            <li>Welcome to use of children and props</li>
        </ChildrenUseChild>

    )
};
export default ChildrenUseParent;