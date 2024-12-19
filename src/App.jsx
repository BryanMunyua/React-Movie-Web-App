import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MovieCard from "./components/MovieCard"
import './css/App.css'
import Home from './pages/Home'
import {Routes, Route} from "react-router-dom"
import Favorite from './pages/Favourites'
import NavBar from './components/NavBar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <NavBar/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorite />}/>
      </Routes>
    </main>
    </div>
  );
}

export default App
