//react:
//library
//framework değil

//jsx:
//jsx = javascript xml
//html benzeri yapıların javascript içine yazılmasını sağlar

//react projesi oluşturma:
//npm create vite@latest
//cd projectname
//npm install
//npm run dev

//declarative:
//react
//imperative:
//vanilla javascript

//örnek1:
ReactDOM.render(
    <h1>hello world</h1>, 
    document.getElementById("div1")
);

//örnek2:
ReactDOM.render(
    <ul> 
        <li>item 1</li> 
        <li>item 2</li> 
        <li>item 3</li> 
    </ul> , 
    document.getElementById("div2")
);

//örnek3:
ReactDOM.render(
    <div>
        <h1>this is h1</h1>
        <p>this is a paragraph</p>
    </div>,
    document.getElementById("div3")
)

//örnek4:
const htmlCodes = 
<div>
    <h1>this is h1</h1>
    <p>this is a paragraph</p>
</div>;

ReactDOM.render(
    htmlCodes,
    document.getElementById("div4")
);

//örnek5:
function MainContent(){
    return (
        <h1>i'm learning react</h1>
    )
};

ReactDOM.render(
    <MainContent/>,
    document.getElementById("div5")
);