import Header from "./Header.jsx"
import Food from "./Food.jsx"
import Footer from "./Footer.jsx"

function App(){
  return(
    <>
      <Header/>
      <Food/>
      <Food/>
      <Food/>
      <Footer/>
    </>
  );
}

export default App

//<Header/>
//<Header></Header>

//return(); ile tek bir element döndürülebilir
//birden fazla element döndürülmek istenirse <> </> kullanılır

//return bloğunda yazılan sıraya göre
//elementler ekranda görünür