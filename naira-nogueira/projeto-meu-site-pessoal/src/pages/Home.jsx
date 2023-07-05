import Header from "../components/Header"

import home from '../assets/homee.png'

import styles from '../styles/pages/home.module.css'

const Home = () => {
  return (
    <>
      <Header 
        title="Meu site pessoal" 
        image={home} 
      />
      
      <div className={styles.texthome}>
        <h1> Home </h1>
        <p>Meu site pessoal tem como objetivo contar um pouco da minha história e mostrar os meus projetinhos no GitHub. <br></br>
Ele foi desenvolvido como atividade avaliativa do curso de Front-End pela REPROGRAMA, a princípio o projeto foi iniciado em sala de aula com o auxílio da professora e finalizado com muito carinho por mim. 
<br></br>Espero que gostem! 
        </p>
      </div>
    </>
  )
}

export default Home