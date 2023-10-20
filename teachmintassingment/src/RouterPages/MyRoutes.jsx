import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import UserDetail from './UserDetail'

const MyRoutes = () => {
  return (
   <Routes>
       <Route path='/' element={<HomePage/>}></Route>
       <Route path='/userDetail/:id' element={<UserDetail/>}></Route>
   </Routes>
  )
}

export default MyRoutes