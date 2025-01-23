import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Title'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vel
      dolorum omnis, quibusdam sequi, facilis saepe molestiae ullam eaque,
      commodi dicta maiores accusantium iure architecto. Porro itaque expedita
      quisquam nobis.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=CaioPO2&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=CaioPO2&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
