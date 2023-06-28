import Footer from "./components/Footer"
import { Pets } from "./components/Pets"
import { Fornecedor } from "./components/fornecedores"
import { Home } from "../src/components/Home"
import { Protetor } from "../src/components/Protetores/protetores"
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
        <Footer/>
      </Router>

    </>
  )
}

export default App
