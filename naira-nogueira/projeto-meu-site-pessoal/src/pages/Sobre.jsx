import Header from "../components/Header"

import style from '../styles/pages/sobre.module.css'

import sobre from '../assets/sobre.jpeg'

const Sobre = () => {
  return (
    <>
      <Header 
        title="Minha história" 
      />

      <main>
        <div>
        <img className={style.nairaFoto} src={sobre} alt="naira" />
        </div>
        <div>
          <p className={style.nairaTexto}>Sou Náira Nogueira, tenho 28 anos, sou formada em Língua Portuguesa pela Universidade do Estado da Bahia, 
            oriunda de uma pequena cidade do interior da Bahia, chamada Governador Mangabeira, conheci a Reprograma através 
            de uma amiga que já tinha feito o curso de Front-End. Buscando estabilidade financeira e um novo objetivo de vida, 
            entrei no mundo da Tecnologia sem nunca ter tido contato com o mais simples desenvolvimento de códigos, 
            hoje tenho conhecimentos básicos sobre html, css, JS, React, Git Bash e Github. </p>
        </div>
      </main>
      <div className={style.nairaRedes}>
        <div>
          <a href="https://www.linkedin.com/in/n%C3%A1ira-nogueira-ba6257174/" target="_blank">Linkedin</a>
          </div>
        <div>
          <a href="https://github.com/Nairanogueira" target="_blank">GitHub</a></div>
      </div>
    </>
  )
}

export default Sobre