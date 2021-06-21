import { CardComponent } from "./components/CardItem/CardItem";
// import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavbarComponent/Navbar";



function App() {
  return (
    <div className="App">
    <Navbar/>
    {/* <ItemListContainer greeting = {'Hola buenas tardes como estan'}/> */}
    <CardComponent/>
    </div>
  );
}

export default App