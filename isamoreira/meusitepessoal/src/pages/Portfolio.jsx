import Header from "../components/header"
import Github from "../components/github"
import portfolio from '../assets/portfolio.svg'
import Projetos from "../components/projects"

const Portfolio = () => {
  return (
    <>
      <Header 
        title="Projetinhos da Isa" 
        image={portfolio} 
      />
      <h1>Meu PORTFOLIO</h1>

      <div>
      <Projetos
        title="Título do Card"
        imageSrc=""
        text="Texto do Card"
        buttonText="Botão"
        buttonUrl="https://www.example.com"
      />
       <Projetos
        title="Título do Card"
        imageSrc=""
        text="Texto do Card"
        buttonText="Botão"
        buttonUrl="https://www.example.com"
      />
       <Projetos
        title="Título do Card"
        imageSrc=""
        text="Texto do Card"
        buttonText="Botão"
        buttonUrl="https://www.example.com"
      />
      </div>
      <div>
        <h2>Alguns projetos do github</h2>
        <Github />
      </div>
    </>
  )
}

export default Portfolio