function Button2(){
    const handleClick = (username) => console.log({username});
    
    return(
        <button className="button" onClick={() => handleClick("irem")}>
            click me
        </button>
    );
}

export default Button2