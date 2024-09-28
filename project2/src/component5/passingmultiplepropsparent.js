import PassingMultiplePropsChild from './passingmultiplepropschild'

function PassingMultiplePropsParent(){
    const user = {
        name:"jockey",
        age: 12
    }
    return(
        <>
        <h1>Welcome to passing multipleprops</h1>
        <PassingMultiplePropsChild data = {user} />
        </>
    )
}

export default PassingMultiplePropsParent