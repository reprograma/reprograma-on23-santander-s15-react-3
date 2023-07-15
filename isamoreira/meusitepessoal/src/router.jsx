import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/menu'
import Home from './pages/Home'
import Sobre from "./pages/Sobre"
import Portfolio from './pages/Portfolio'
import Contato from './pages/Contato'

import Footer from './components/footer'


const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
      <Footer content="Feito pela Isa plagiando a Simara com muito amor ♡" />
    </BrowserRouter>
  )
}

export default Router