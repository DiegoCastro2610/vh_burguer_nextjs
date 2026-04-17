import styles from "../../styles/headercomponents.module.css"


const Header = () => {
    return(
            <header id={styles.header}>
                <div className={`${styles.container} layout_guide`}>
                <img id={styles.logo} src="../../imgs/Logo_VH_Burguer.svg" alt="Logo do Vh Burguer" />

                <nav id={styles.nave_menu}>
                    <a href="">Destaques</a>
                    <a href="">Cardápio</a>
                    <a href="">Unidades</a>
                    <a href="">Login</a>
                </nav>
                <button id={styles.btn_icon}>
                    <img src="../../imgs/icon_hamburguer.svg" alt="icone que representa um hamburguer"/>
                </button>
                </div>
            </header>
    )
}

export default Header