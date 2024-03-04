import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import NavbarComponent from './components/navbar'
import FooterComponent from './components/footer'
import ButtonComponent from './components/button'
import ButtonComponent2 from './components/button2'
import { Routes,Route } from 'react-router-dom'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <NavbarComponent idName ={"Isa"}idNumber={2}/>
    {/* Iniliasasi route path untuk berpindah-pindah halaman*/}
    <Routes>
      <Route element={<AboutPage/>} path='/about'/>
      <Route element={<ContactPage/>} path='/contact'/>
    </Routes>


    
    </>
  )
}

export default App
