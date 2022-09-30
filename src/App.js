import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import ItemDetailsContainer from './components/itemDetailsContainer/ItemDetailsContainer';
import MercadoLibre from './components/MercadoLibre/MercadoLibre';

function App() {
  return (
    <div className="App">
      <header >
        <Navbar/>
        <ItemListContainer greeting={"Bienvenidos !!"}/>
        <ItemDetailsContainer/>
        <MercadoLibre/>
      </header>
    </div>
  );
}

export default App;
