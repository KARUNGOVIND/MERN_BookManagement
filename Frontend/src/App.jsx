import { useState } from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Book from './pages/Book';
import Add from './pages/Add';
import Update from './pages/Update';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Book/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/update' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
