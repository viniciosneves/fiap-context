import EstilosGlobais from "./EstilosGlobais/EstilosGlobais"
import Banner from "./componentes/Banner/Banner"
import BarraNavegacao from "./componentes/BarraNavegacao/BarraNavegacao"
import Titulo from "./componentes/Titulo/Titulo"
import LivrosDestaque from "./componentes/LivrosDestaque/LivrosDestaque"
import Topicos from "./componentes/Topicos/Topicos"
import Newsletter from "./componentes/Newsletter/Newsletter"
import Rodape from "./componentes/Rodape/Rodape"
import { LivrosProvider } from "./context/LivrosContext/LivrosContext"

const livros = [
  {
      id: 1,
      titulo: 'JavaScript Assertivo',
      resumo: 'Testes e qualidade de código em todas as camadas da aplicação',
      autor: 'Gabriel Ramos',
      preco: 29.9,
      capa: '/livros/js.png'
  },
  {
      id: 2,
      titulo: 'Apache Kafka e Spring Bootsss',
      resumo: 'Comunicação assíncrona entre microsserviços',
      autor: 'Eduardo Felipe Zambom Santana',
      preco: 29.9,
      capa: '/livros/kafka.png'
  },
  {
      id: 3,
      titulo: 'Liderança em Design',
      resumo: 'Habilidades de gestão para alavancar sua carreira',
      autor: 'Victor Zanini',
      preco: 29.9,
      capa: '/livros/lideranca.png'
  }
];

function App() {
  return (
    <>
      <EstilosGlobais />
      <BarraNavegacao />
      <Banner />
      <Titulo>
        Últimos lançamentos
      </Titulo>
      <LivrosProvider livros={livros}>
        <LivrosDestaque />
      </LivrosProvider>
      <Topicos />
      <Newsletter />
      <Rodape />
    </>
  )
}

export default App
