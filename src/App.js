import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer greeting={'Greeting message here!'}/>
    </div>
  );
}

export default App;
