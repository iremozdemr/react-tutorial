function List2(){
    const letters = ["b","c","a","d","e"];
    letters.sort();
    const listItems = letters.map(letter => <li key={letter.charCodeAt(0)}>{letter}</li>);

    return(<ul>{listItems}</ul>);
}

export default List2