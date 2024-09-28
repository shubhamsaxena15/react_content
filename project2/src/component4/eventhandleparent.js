import EventHandleChild from "./eventhandlechild"

function EventHandleParent(){
    
    function buttonclick(){
        alert("button clicked")
    };

    return(
        <>
        <h1>event handle parent function</h1>
        <EventHandleChild onclick = {buttonclick} label = "click me"/>
        </>
    )
}

export default EventHandleParent