import { useState } from 'react'
import './App.css'
import './index.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/blue';
import Red from './components/red';
import Home from './components/Home';
import NavBar from './components/Navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="container">
    <h1>Hello React Router!</h1>
    <NavBar />
    <div id="main-section">
   <Routes>
     <Route path="/blue" element={<Blue />} />
     <Route path="/red" element={<Red />} />
     <Route path="/" element={<Home />}/>
   </Routes>
</div>
  </div>


  )
}

export default App
