import styles from "../../styles/sub-header.module.css"

const SubHeader= () =>{
    return(
        <header id={styles.SubHeader}>
            <img id={styles.Logo} src="../../../imgs/Logo_footer.svg" alt="" />
            <a href="" id={styles.voltar}>Voltar</a>
        </header>
    )
}

export default SubHeader