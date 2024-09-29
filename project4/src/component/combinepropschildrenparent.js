import CombinePropsChildrenChild from './combinepropschildrenchild'

function CombinePropsChildrenParent(){
    return(
        <CombinePropsChildrenChild href="https://google.com" download={true}>
            Click Me
            </CombinePropsChildrenChild>
    )

};
export default CombinePropsChildrenParent;