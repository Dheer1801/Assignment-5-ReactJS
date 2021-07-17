import React from 'react'
import './App.css'
import Body from './Components/Body'
import Feature from './Components/Feature'
import NavBar from './Components/Navbar'
import CardSection from './Components/CardSection'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <Feature />
      <CardSection />
      <Footer />
    </div>
  )
}

export default App
