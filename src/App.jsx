import './App.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './views/Home'
import Footer from './components/Footer'

function App() {

  return (
    <div className='relative min-h-screen w-full bg-rosa'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
