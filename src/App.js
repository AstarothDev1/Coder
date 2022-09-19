import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header >
        <Navbar/>
        <ItemListContainer greeting={"Bienvenidos !!"}/>
        <div>
          <h1>Encuentra Tu Producto !</h1>
          <input placeholder="Buscar Producto"/>
        </div>
      </header>
    </div>
  );
}

export default App;
