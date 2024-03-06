import { useEffect, useState } from 'react';
import GridKendo from '../components/GridKendo/GridKendo';
import Header from '../components/Header/Header';
import { IProps } from '../interface/IPropsRequisicao';
import { requisicaoRickMortyEpisodios, requisicaoRickMortyPersonanges } from '../services/requisicoes';
import styles from './PaginaPrincipal.module.scss';
import Personagens from '../components/Personagens/Personagens';
import { IPropsPersonagens } from '../interface/IPropsRequisicaoPersonagens';

export default function PaginaPrincipal() {
  const [resultadoReq, setResultadoReq] = useState<IProps[]>([]);

  const [personagens, setPersonagens] = useState<IPropsPersonagens[]>([]);

  async function fetchRickEMortyEpisodios() {
    const dataEpisodios = await requisicaoRickMortyEpisodios();
    setResultadoReq(dataEpisodios.results);
  }

  async function fetchRickEMortyEpisodiosPersonagens() {
    const dataPersonagens = await requisicaoRickMortyPersonanges();
    setPersonagens(dataPersonagens.results);
  }

  useEffect(() => {
    fetchRickEMortyEpisodios();
    fetchRickEMortyEpisodiosPersonagens();
  }, []);

  return (
    <div className="App">
      <div className={styles.container}>
        <Header />
        <div className={styles.container__tabela}>
          <GridKendo 
            resultadoReq={resultadoReq}
            subtitulo="Episódios"
          />
          <Personagens 
              personagens={personagens}
          />
        </div>
      </div>
    </div>
  );
}

