import Header from "../components/Header"

import home from '../assets/home.svg'

const Home = () => {
  return (
    <>
      <Header 
        title="Site da Lili" 
        image={home} 
      />
      <h1>HOME</h1>
    </>
  )
}

export default Home
