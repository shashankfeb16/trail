import React from 'react';
import {Route, Routes} from "react-router-dom"
import Books from './Books';
import SingleBook from "./SingleBook";
import EditBook from "./EditBook";
import Login from "./Login"
import RequiredAuth from '../hoc/RequiredAuth';

const MainRoutes = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Books></Books>}></Route>
        <Route path='/books/:id' element={<SingleBook></SingleBook>}></Route>
        <Route path='/books/:id/edit' element={<RequiredAuth><EditBook></EditBook></RequiredAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<h3>Page Not Found</h3>}></Route>
    </Routes>
  )
}

export default MainRoutes