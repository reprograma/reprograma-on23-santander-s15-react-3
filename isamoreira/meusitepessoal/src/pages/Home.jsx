import { Alien, BracketsCurly, AddressBook } from 'phosphor-react'
import home from '../assets/home.svg'
import styles from '../styles/pages/home.module.css'
import Header from "../components/header"

const Home = () => {
  return (
    <>
      <Header 
        title="Site da Isa Moreira" 
        image={home} 
      />
      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <Alien size={150} color="#686AAC" weight="thin"/>
          <h2 className={styles.cardTitle}>Vida</h2>
          <p className={styles.cardDescription}> Aqui tem um pouco sobre mim, minha formação, algumas habilidades, minha história de migração de carreira, gostos e mais. </p>
        </div>
        <div className={styles.cardContainer}>
          <BracketsCurly size={150} color="#686AAC" weight="thin"/>
          <h2 className={styles.cardTitle}>Código</h2>
          <p className={styles.cardDescription}>Mostro meu portfólio. Tudo o que aprendi até o momento dando destaque para alguns dos projetos que criei enquanto estudo programação. </p>
        </div>
        <div className={styles.cardContainer}>
          <AddressBook size={150} color="#686AAC" weight="thin"/>
          <h2 className={styles.cardTitle}>Contatinho</h2>
          <p className={styles.cardDescription}> Entre em contato comigo. Seja para entrevistas de emprego como deva ou para trocarmos ideias sobre os estudos e projetos. </p>
        </div>
      </div>
      
    </>
  )
}

export default Home