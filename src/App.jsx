import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/HomePage';
import DashBoard from './pages/admin/DashBoard';
import ProductPage from './pages/admin/Product';
import AddProduct from './pages/admin/AddProduct';
import UpdateProductPage from './pages/admin/UpdateProduct';

function App() {
  const [products, Setproduct] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/products').then(
      (res)=> res.json()
    ).then(
    (data)=> Setproduct(data)
    )
  },[])
  const removeProduct = (id) =>{
    fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE'
    }).then(
      ()=> Setproduct(products.filter((item)=>item.id !== id))
    )
  }
  const addProduct = (product) =>{
    fetch(`http://localhost:3000/products/`, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(product)
      
    })
  }
  const onUpdate = (product) =>{
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
  }
  return (
    <>
    <Routes>
    <Route path='/' element={<Homepage products={products} />} />
        <Route path='/admin' element={<DashBoard />} />
        <Route path='/admin/products' element={<ProductPage products={products} removeProduct={removeProduct} />} />
        <Route path='/admin/product/add' element={<AddProduct addProduct={addProduct} />} />
        <Route path='/admin/product/update/:id' element={<UpdateProductPage onUpdate={onUpdate} products={products} />} />
    </Routes>
    </>
  )
}

export default App
