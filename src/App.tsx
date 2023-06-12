import UIRoot from './UIRoot';
import './App.css';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import WarehouseEdit from './WarehouseApp/WarehouseEdit';
import ProductWarehouse from './WarehouseApp/ProductWarehouse';

const App = ():JSX.Element => {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
    <Route path = '/' element={<UIRoot />}></Route>
    <Route path='warehouse/:pid/:wid' element={<WarehouseEdit/>} />
    </Routes>
    </BrowserRouter>
    </div> 
  );
 }
 

export default App;
