import './App.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './views/Home'

function App() {

  return (
    <div className='min-h-screen w-full bg-rosa'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
