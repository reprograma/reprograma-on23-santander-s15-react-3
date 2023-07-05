import Header from "../components/Header"

import sobre from '../assets/sobre.svg'

const Sobre = () => {
  return (
    <>
      <Header 
        title="Minha história" 
        image={sobre} 
      />
      <h1>SOBRE</h1>
    </>
  )
}

export default Sobre