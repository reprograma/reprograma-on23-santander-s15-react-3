import Header from "../components/Header"
import Title from "../components/Title"
import styles from '../styles/pages/home.module.css'
import { FcAddressBook } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import {FcReddit} from "react-icons/fc"
import home from '../assets/home.svg'

const Home = () => {
  return (
    <>
      <Header
        title="console.log(Olá, eu sou a Fran)"
        subtitle="Desenvolvedora Fron-End"
        image={home}
      />
    
      <main className={styles.containerMainHome}>
        <div className={styles.cardVida}>
        <FcLike  className={styles.imgVida}/>
          <Title content="Vida" />
          <p>Eu conto um pouquinho sobre mim, minha formação,
            a história da minha migração de carreira,
            gostos e curiosidades.
          </p>
        </div>
        <div className={styles.cardCodigo}>
         <FcReddit className={styles.imgCodigo}/>
          <Title content="Código" />
          <p>Mostro meu portfólio. Tudo o que aprendi até o momento dando
            destaque para alguns dos projetos que criei enquanto estudo
            programação.
          </p>
        </div>
        <div className={styles.cardContatos}>
        <FcAddressBook className={styles.imgContatos}/>
          <Title content="Contatos" />
          <p>Entre em contato comigo. Seja para entrevistas de emprego
            como deva ou para trocarmos ideias sobre os estudos.
          </p>
        </div>
      </main>
    </>
  )
}

export default Home
