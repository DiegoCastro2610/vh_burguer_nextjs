import styles from "../../styles/footercomponents.module.css"

const Footer = () => {
    return(
        <footer id={styles.footer}>
            <div id={styles.divImagens}>
                <img id={styles.logo} src="../../imgs/Logo_footer.svg" alt="logo do VH Burguer" />
                <div id={styles.redes}>
                    <a href=""><img className={styles.rede} src="../../imgs/tiktok.png" alt="icone tiktok" /></a> 
                    <a href=""><img className={styles.rede} src="../../imgs/face.png" alt="icone facebook" /></a> 
                    <a href=""><img className={styles.rede} src="../../imgs/insta.png" alt="icone instagram" /></a> 
                    <a href=""><img className={styles.rede} src="../../imgs/youtube.png" alt="icone youtube" /></a> 
                </div>
            </div>
            <div id={styles.divDireitos}>
                <p>Copyright © 2025 VH Burguer | Todos os direitos reservados</p>
            </div>   
        </footer>
    )
}

export default Footer