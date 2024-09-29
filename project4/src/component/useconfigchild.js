function UseConfigChild({children , ...data}){
    return(
        <div>
            <a {...data}>{children}</a>

        </div>
        

    )

};
export default UseConfigChild;