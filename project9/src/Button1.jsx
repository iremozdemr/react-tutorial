function Button1(){
    const handleClick = () => console.log("hello");
    
    return(
        <button className="button" onClick={handleClick}>
            click me
        </button>
    );
}

export default Button1