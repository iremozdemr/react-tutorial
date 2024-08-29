function List3(){
    const list = [
        {id: 1,name: "person1",age: 18},
        {id: 2,name: "person2",age: 12},
        {id: 3,name: "person3",age: 24}
    ];

    list.sort((a,b) => a.age.toString().localeCompare(b.age));
    //alphabetical sort

    list.sort((a,b) => b.age.toString().localeCompare(a.age));
    //reverse alphabetical sort

    list.sort((a,b) => a.age-b.age);
    //numerical sort

    list.sort((a,b) => b.age-a.age);
    //reverse numerical sort

    const listItems = list.map(item => 
        <li key={item.id}>
            {item.name}
            <br></br>
            {item.age}
        </li>
    );

    return(<ol>{listItems}</ol>);
}

export default List3