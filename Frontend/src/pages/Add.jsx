import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Add() {
    const [book,Setbook]=useState({
        title:"",
        description:"",
        price:null,
        colorpicture:""
    });

    const navigate=useNavigate()

    const handleChange = e =>{
        Setbook((prev)=>({...prev,[e.target.name]:e.target.value}))
        console.log(book);
    }

    const handleclick= async e=>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8081/books",book)
            navigate("/");
        }
        catch(err){}

        console.log(props.book)
    }
  return (
    <div className='form'>
        <h1>Add new Book</h1>
        <input type="text" placeholder="title" onChange={handleChange} name="title"/>
        <input type="text" placeholder="description" onChange={handleChange} name="description"/>
        <input type="number" placeholder="price" onChange={handleChange} name="price"/>
        <input type="text" placeholder="colorpicture" onChange={handleChange} name="colorpicture"/>
        <button onClick={handleclick}>Clickme</button>
    </div>
  )
}
export default Add
