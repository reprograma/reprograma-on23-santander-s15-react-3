import Header from "../components/Header"
import styles from '../styles/pages/portfolio.module.css'
import portfolio from '../assets/portfolio.svg'
import Axios from 'axios'
import { useEffect, useState } from "react"

const Portfolio = () => {
    const [repos, setRepos] = useState([])

    useEffect(() => {
      const getRepositorio = async () => {
        try {
          const response = await Axios.get(`https://api.github.com/users/Nairanogueira/repos`)
          setRepos(response.data)
      } catch (err) {
        console.error('erro capiturado: ' + err)
      }
      }
      getRepositorio()
  
  }, [])


  return (
    <>
      <Header 
        title="Meus projetinhos" 
        image={portfolio} 
      />

      <h1>PORTFOLIO</h1>

      <div className={styles.repoConteiner}>
        {repos.map((repo) => (
          <div className={styles.cardRepo} key={repo.id}>
            <h3 className={styles.cardText}>{repo.name}</h3>
            <p className={styles.cardText}>{repo.description}</p>
            <a className={styles.cardLink} href={repo.html_url} target="_blank"></a> 
          </div>
        )
        )
        }
      </div>
    </>
  )
}

export default Portfolio