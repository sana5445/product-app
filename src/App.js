import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';
import ViewAllProduct from './components/ViewAllProduct';

function App() {
  return (
    <div>
    <AddProduct/>
    <SearchProduct/>
    <DeleteProduct/>
    <ViewAllProduct/>
      
    </div>
  );
}

export default App;
