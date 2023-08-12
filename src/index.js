import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GetAllProducts from './components/Products/GetAllProducts';
import ShowSingleProduct from './components/Products/ShowSingleProduct';
import AddNewProduct from './components/Products/AddNewProduct';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element = {<GetAllProducts/>}></Route>
      <Route path="/viewproduct/:id" element = {<ShowSingleProduct/>}></Route>
      <Route path="/addnewproduct" element = {<AddNewProduct></AddNewProduct>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
