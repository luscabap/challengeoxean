import { useEffect, useState } from 'react';
import GridKendo from '../components/GridKendo/GridKendo';
import Header from '../components/Header/Header';
import { IProps } from '../interface/IPropsRequisicao';
import { requisicaoRickMorty } from '../services/requisicoes';
import styles from './PaginaPrincipal.module.scss';

export default function PaginaPrincipal() {
  const [resultadoReq, setResultadoReq] = useState<IProps[]>([]);

  async function fetchRickEMorty() {
    const data = await requisicaoRickMorty();
    setResultadoReq(data.results)
  }

  useEffect(() => {
    fetchRickEMorty()
  }, []);

  return (
    <div className="App">
      <div className={styles.container}>
        <Header />
        <div className={styles.container__tabela}>
          <GridKendo resultadoReq={resultadoReq}/>
        </div>
      </div>
    </div>
  );
}

