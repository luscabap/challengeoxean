import { IPropsPersonagensResposta } from "../../interface/IPropsRequisicaoPersonagens";
import CardPersonagem from "./CardPersonagem/CardPersonagem";
import styles from './Personagens.module.scss'

const Personagens: React.FC<IPropsPersonagensResposta> = ({ personagens }) => {
    return (
        <div className={styles.container}>
            {personagens.map((item, index) => (
                <CardPersonagem 
                    gender={item.gender}
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    species={item.species}
                    status={item.status}
                />
            ))}
        </div>
    )
};

export default Personagens