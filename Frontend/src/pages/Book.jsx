import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

 function Book() {
    const [Book, Setbook] = useState([])
    

    useEffect(() => {
        const fetchbook = async () => {
            try {
                const res = await axios.get("http://localhost:8081/books")
                Setbook(res.data)
            } 
            catch (err) 
            { console.log(err) }
        }
        fetchbook()
    }, [])
    return (
        <>
        <h1>Karun Book Shop</h1>
        <div className='bookes'>
            {Book.map(book=>(
                <div className='book' key={book.id}>
                <h1>{book.title}</h1>
                <p>{book.description}</p>
                <p>{book.price}</p>
                </div>
            ))}
            
        </div>
        <button><Link  to="/Add" >Add new book</Link></button>
        </>
    )
}
export default Book
