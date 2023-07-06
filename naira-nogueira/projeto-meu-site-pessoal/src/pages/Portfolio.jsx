import Header from "../components/Header"
import styles from '../styles/pages/portfolio.module.css'
import portfolio from '../assets/portfolio.png'
import Axios from 'axios'
import { useEffect, useState } from "react"

const Portfolio = () => {
    const [repos, setRepos] = useState([])

    let ids = ['623649210', '625515839', '651895448'] // id dos meus projetos favoritos

    let listaRepoQuero = repos.filter(item => ids.find(id => id== item.id))

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
      />

      <main>
        <div className={styles.mainPort}>
        <img src={portfolio} alt="github" />
        </div>
        <div className={styles.repoFavoritos}>
          <div>
            <h2>Meus Favoritos:</h2>
          </div>
          <div>
          {listaRepoQuero.map((repo) => (
          <div className={styles.cardReposit} key={repo.id}>
            <h3 className={styles.cardText}>{repo.name}</h3>
            <a className={styles.cardLink} href={repo.html_url} target="_blank"></a> 
          </div>
        ))
        }
          </div>
        </div>
      </main>

      <div className={styles.repoConteiner}>
        {repos.map((repo) => (
          <div className={styles.cardRepo} key={repo.id}>
            <h3 className={styles.cardText}>{repo.name}</h3>
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