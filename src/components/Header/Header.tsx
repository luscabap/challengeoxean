import styles from './Header.module.scss'

export default function Header() {
    return (
        <div className={styles.container}>
            <h1 className={styles.container__titulo}>Projeto de API do Rick and Morty</h1>
            <nav className={styles.container__nav}>
                <ul className={styles.container__nav__lista}>
                    <a href='#' className={styles.container__nav__lista__ancora}>
                        <li className={styles.container__nav__lista__ancora__item}>Home</li>
                    </a>
                    <a href='#' className={styles.container__nav__lista__ancora}>
                        <li className={styles.container__nav__lista__ancora__item}>Episódios</li>
                    </a>
                    <a href='#' className={styles.container__nav__lista__ancora}>
                        <li className={styles.container__nav__lista__ancora__item}>Personagens</li>
                    </a>
                </ul>
            </nav>
        </div>
    )
}