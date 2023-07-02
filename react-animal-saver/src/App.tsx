import Footer from "./components/Footer"
import { Pets } from "./components/Pets"
import { Home } from "../src/components/Home"
import { Protetor } from "./components/Protetores"
import './global.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LoginProtetora } from './components/LoginProtetora';
import { Header } from './components/Header';
import { CadastroProtetora } from './components/CadastroProtetora';
 

function App() {
  

  return (
    <>
      <Router>
        <Header/>
        <Routes>

          
          <Route path="/" element={<Home/>}/>
          <Route path="/pets" element={<Pets/>}/>
          <Route path="/protetor" element={<Protetor/>}/>
          <Route path="/loginProtetora" element={<LoginProtetora/>}/>
          <Route path="/cadastroProtetora" element={<CadastroProtetora/>}/>
          
          {/* <Route path="/login" element={<Login/>}/>
          <Route path="/cadastrodeanimal" element={<CadastroAnimal/>}/> */}
        </Routes>
        <Footer/>
      </Router>

    </>
  )
}

export default App
