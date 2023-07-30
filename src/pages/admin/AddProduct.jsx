import React from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const AddProduct = ({ addProduct }) => {
    const [data, setData] = useState({}) 
    const onHandleChange = (e) => {
        const { name, value } = e.target; 
        const newData = { ...data, [name]: value } 
        setData(newData);
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        addProduct(data); 
    }

    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <label htmlFor="">name</label><br />
                <input type="text"  onChange={onHandleChange} name='name' /><br />
                <label htmlFor="">price</label><br />
                <input type="text"  onChange={onHandleChange} name='price' /><br />
                <button type="submit">add</button>
            </form>
        </div>
    )
}

export default AddProduct