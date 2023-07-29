import Header from "../components/Header"

import portfolio from '../assets/portfolio.svg'

const Portfolio = () => {
  return (
    <>
      <Header 
        title="Projetinhos da Losa" 
        image={portfolio} 
      />
      <h1>PORTFOLIO</h1>
    </>
  )
}

export default Portfolio