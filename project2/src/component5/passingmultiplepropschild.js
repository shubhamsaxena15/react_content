function PassingMultiplePropsChild ({data}){

    const greeting = data.age >= 18 ? "Please Caste your vote": "You are not Eligible to cast your vote"; 
    return(
        <>
        <h1>{greeting}</h1>
        <h1>{data.name}</h1>
        <p>{data.age}</p>
        </>
    )
}
export default PassingMultiplePropsChild