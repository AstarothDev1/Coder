import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header >
        <Navbar/>
        <ItemListContainer greeting={"Bienvenidos !!"}/>
      </header>
    </div>
  );
}

export default App;
