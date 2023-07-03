import Footer from "./components/Footer"
import { Pets } from "./components/Pets"
import { Home } from "../src/components/Home"
import { Protetor } from "../src/components/Protetores/protetores"
import './global.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LoginProtetora } from './components/LoginProtetora';
import { Header } from './components/Header';
import { CadastroProtetora } from './components/CadastroProtetora';
import { CadastroPet } from './components/CadastroPet';
 

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
          <Route path="/cadastroPet" element={<CadastroPet/>}/>
          
          {/* <Route path="/login" element={<Login/>}/>
          <Route path="/cadastrodeanimal" element={<CadastroAnimal/>}/> */}
        </Routes>
        <Footer/>
      </Router>

    </>
  )
}

export default App
