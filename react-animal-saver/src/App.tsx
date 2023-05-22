import './App.css'
import Footer from './components/footer/Footer'
import { Pets } from "./components/Pets"
import { Fornecedor } from "./components/fornecedores"
import { Home } from "./components/home"
import { Protetor } from "./components/protetores/protetores"
import './global.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pets" element={<Pets/>}/>
          <Route path="/fornecedor" element={<Fornecedor/>}/>
          <Route path="/protetor" element={<Protetor/>}/>
        </Routes>
      </Router>
    </>
  <Footer/>
  )
}

export default App
