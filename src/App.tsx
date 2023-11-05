import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Billing from './Pages/Billing'
import CardInputForm from './Components/CardInputForm'
import CardHandler from './Components/CardHandler'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Billing />} />
          <Route path='/cardInput' element={<CardHandler />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App