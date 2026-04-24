
import styles from "../../styles/detalhe-produto.module.css"

import SubHeader from "@/components/sub-header/sub-header"
import Footer from "@/components/footer/footer"

const DetalheProduto= () =>{
    return(
        <>
            <main id={styles.main}>
                <SubHeader/>
                <section>
                    <div>
                        <h1>Detalhes do X-Bacon</h1>
                        <img src="../../../imgs/HamburguerAlcatraComBacon_1-scaled 1.png" alt="" />
                        <div>
                            <div>
                                <h4>Descrição</h4>
                                <p>Um pão brioche macio segura a fera: duas (ou três) carnes altas e suculentas, queijo cheddar derretido escorrendo pelas laterais, bacon crocante, cebola caramelizada no ponto adocicado, alface fresca, tomate e um molho especial intenso que amarra tudo. Para completar o ataque, uma camada extra de onion rings ou molho defumado que transforma cada mordida numa explosão.</p>
                            </div>
                            <div>
                                <h4>Preço (R$)</h4>
                                <p>R$45,00 R$35,00</p>
                                <h4>Categoria</h4>
                                <ul>
                                    <li>Premium</li>
                                    <li>Artesanal</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </main>
        </>
    )
}

export default DetalheProduto