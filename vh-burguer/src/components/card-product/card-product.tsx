import styles from "../../styles/card-product.module.css"

const Card = () =>{
    return(
        <div id={styles.card}>
            <img src="../../../imgs/HamburguerAlcatraComBacon_1-scaled 1.png" alt="" />
            <div id={styles.titulo}>
                <h2>Monster</h2>
            </div>
                <p>Hambúrguer brutal, suculento e exageradamente saboroso.</p>
            <div id={styles.preco}>
                <h3>R$ 35,00</h3>
            </div>
        </div>
    )

}

export default Card