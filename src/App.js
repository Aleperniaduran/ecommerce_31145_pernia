import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='*' element={<div className='Message-404'><h1>ERROR 404</h1><h1>NO SE ENCONTRO LA PAGINA.</h1></div>} />  
            <Route path='/' element={<ItemListContainer greeting={'Esta es la HomePage de mi tienda'} />} />
            <Route path='/list' element={<ItemListContainer greeting={'Lista de Productos'} />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
