import Footer from './components/Footer';
import { Pets } from "./components/Pets";
import { Home } from './components/Home';
import { Protetor } from "./components/Protetores/protetores";
import './global.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CadastroProtetora } from './components/CadastroProtetora';
import { Header } from './components/Header';
 

function App() {

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pets" element={<Pets/>}/>
          <Route path="/protetor" element={<Protetor/>}/>
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
