import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer.js/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greeting="Bienvenidos a mi tienda" />
      </header>
    </div>
  );
}

export default App;
