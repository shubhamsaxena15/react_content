

function EventHandleChild({onclick , label}){
    return(
        <>
        <h1> hello this is me as a child</h1>
        <button onClick={onclick}>{label}</button>
        </>
    )
}

export default EventHandleChild