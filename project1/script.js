//declarative:
//react

//imperative:
//vanilla javascript

ReactDOM.render(
    <h1>hello world</h1>, 
    document.getElementById("div1")
);

ReactDOM.render(
    <ul> <li>item 1</li> <li>item 2</li> <li>item 3</li> </ul> , 
    document.getElementById("div2")
);

function MainContent(){
    return (
        <h1>i'm learning react</h1>
    )
}

ReactDOM.render(
    <MainContent/>,
    document.getElementById("div3")
)