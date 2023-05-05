import React from 'react'
import MovieContent from './components/MovieContent.jsx'
import { Routes, Route } from 'react-router-dom'
import MovieDetail from './components/MovieDetail.jsx'
const App = () => {
  return (
    <Routes>
      <Route element={<MovieContent />} path='/' />
      <Route element={<MovieDetail />} path='/movies/:id' />
    </Routes>
  )
}

export default App
