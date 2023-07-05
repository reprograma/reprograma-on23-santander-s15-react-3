# Exercício de Casa 🏠 

## Nome do Exercicio

Vamos iniciar um projetinho react do zero com direito a componetização e uso de props.

O Projetinho será: "Meus conteúdos favoritos"
E deverá conter os componentes como descrito abaixo.

`- Eu fiz o meu, vem aqui entender melhor e se inspirar`: [Meu site](https://projeto-react1.netlify.app/) 

> O que deve ser feito:
1) Crie seu projeto react com vite
2) Suba esse projeto no seu github, inclua um read me contando tudo o que você aprendeu na aula. 
3) Atenção! A entrega deverá ser feita pelo classroom e será o link do seu repositório. Arraseee! E qualquer coisa, me chama!

#### Componentes maiores
> componentes que usam os componentes menores recebendos os conteúdos por props

* Bio 
* Cards

#### Componentes menores

> somente o esqueleto, os conteúdos serão inclusos por props

* Title 
* Subtitle
* Text
* Image
* Header
* Footer

# Estrutura do App

> recebe todos os conteúdos que devem aparecer na tela e recebe também o conteúdo do footer e header por props


```
import  Header  from './components/Header'
import  Bio  from './components/Bio'
import  Cards  from './components/Cards'
import  Footer  from './components/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header content="Meus conteúdos favoritos" />
      <Bio />
      <Cards />
      <Footer content="Feito com ♡ por Simara. E todos os direitos são reservados." />
    </div>
  )
}

export default App
```
---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [ ] Fiz o fork do repositório.
- [ ] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [ ] Criei minha branch (` git checkout -b nome-sobrenome `)
- [ ] Criei a pasta com o meu nome dentro da pasta entregas (` mkdir nome-sobrenome`)
- [ ] Resolvi o exercício dentro da minha pasta. Como no [exemplo](/on21-imersao-js-S1-TDD/exercicios/para-casa/entregas/exemplo-nome-sobrenome/).
- [ ] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushei os commits na minha branch (`git push origin nome-da-branch`)
- [ ] Criei um Pull Request seguindo as orientações que estao nesse [documento](/on21-imersao-js-S1-TDD/exercicios/para-casa/instrucoes-pull-request.md).
