import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import NavbarComponent from './components/navbar'
import FooterComponent from './components/footer'
import ButtonComponent from './components/button'
import ButtonComponent2 from './components/button2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavbarComponent idName ={"Isa"}idNumber={2}/>
    {/* menggunakan kurawa untuk semua jenis data, kecuali string, hanya karakternya saja */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Intro React with Vite</h1>
      <ButtonComponent typeButton="button" ButtonTheme="warning">
        <span>Save</span>
      </ButtonComponent>
      <ButtonComponent typeButton="button">
        <span style={{color:"red"}}>Isa</span>
      </ButtonComponent>

      <ButtonComponent2>
        edi
      </ButtonComponent2>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>  
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <FooterComponent/>
    </>
  )
}

export default App
