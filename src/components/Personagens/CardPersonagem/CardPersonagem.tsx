import { IPropsPersonagens } from "../../../interface/IPropsRequisicaoPersonagens";
import styles from './CardPersonagem.module.scss'

export default function CardPersonagem({gender, image, name, species, status}: IPropsPersonagens){
    return (
        <div className={styles.container}>
            <h3 className={styles.container__nome}>{name}</h3>
            <img src={image} alt={name} className={styles.container__imagem}/>
            <ul className={styles.container__lista}>
                <li className={styles.container__lista__titulo}>Gênero
                    <div className={styles.container__lista__titulo__info}>{gender}</div>
                </li>
                <li className={styles.container__lista__titulo}>Espécie
                    <div className={styles.container__lista__titulo__info}>{species}</div>
                </li>
                <li className={styles.container__lista__titulo}>Status
                    <div className={styles.container__lista__titulo__info}>{status}</div>
                </li>
            </ul>
        </div>
    )
}