import Header from "../components/header"
import sobre from '../assets/sobre.svg'
import styles from '../styles/pages/sobre.module.css'

const Sobre = () => {
  return (
    <>
      <Header 
        title="Descubra mais sobre a Isa Moreira" 
        image={sobre} 
      />
      <div className={styles.container}>
      <h1 className={styles.title}>Sobre Mim</h1>
      <p className={styles.text}>Essa é uma breve descrição da minha formação, experiência e habilidades. Estou à disposição para fornecer mais informações ou responder a quaisquer outras perguntas que você possa ter.</p>
      <p className={styles.text}>Sou uma profissional com formação em Tecnologia em Análise e Desenvolvimento de Sistemas pelo Centro Universitário Senac, com previsão de conclusão em 2024, e em Bacharelado em Gastronomia pela Universidade Federal da Bahia, formada em 2015. Além disso, possuo uma variedade de cursos de desenvolvimento full-stack, frontend e gerenciamento de projetos.</p>
      <p className={styles.text}>Tenho experiência profissional em gestão de projetos e coordenação de atividades relacionadas à gastronomia e inclusão socioprodutiva. Trabalhei em projetos como o Conexão Cerrado, onde liderei oficinas de ecogastronomia, desenvolvi novos produtos gastronômicos e gerenciei as redes sociais e o site do projeto. Também atuei na UNISOL BAHIA, auxiliando projetos de inclusão socioprodutiva para egressos do sistema prisional, e na SLOW FOOD BRASIL, fornecendo consultoria técnica para o projeto Slow Food Indica. </p>
      <p className={styles.text}>Em termos acadêmicos, participo de iniciação científica no Centro Universitário Senac São Paulo, com foco em estudos sobre os resultados ESG, e estou envolvida em um projeto de extensão em parceria com a GS1 Brasil, onde atuo na gestão de projetos de TI e consultoria de soluções para controle de estoque.</p>
      <p className={styles.text}>Minhas habilidades técnicas incluem desenvolvimento web (HTML, CSS, JavaScript, React), desenvolvimento backend (Java, C#, Node.js), bancos de dados (SQL, MySQL, MongoDb, SQL Server), conhecimentos em Linux, Git e GitHub, gestão de projetos, metodologias ágeis (Scrum), e possuo inglês intermediário.</p>
      </div>

       
    </>
  )
}

export default Sobre
