function Card(){
    return(
        <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150"></img>
            <h2 className="card-title">irem ozdemir</h2>
            <p className="card-text">i make youtube videos</p>
        </div>
    );
}

export default Card

//jsx'de class yerine className kullanılır

//image ekleme:
//import profilepic from "./assets/image.png"
//<img src={profilepic}></img>