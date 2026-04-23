import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import Card from "@/components/card-product/card-product"


import styles from "../../styles/home.module.css"


const Home = () => {
    return(
        <>
            <Header/>
            <main>
                <section id={styles.banner}>
                    <h1 id={styles.tituloBemVindo}>Bem-vindo ao VH Burguer</h1>
                    <img id={styles.imagemBanner} src="../../../imgs/foto_de_hamburgueres.png" alt="" />
                    <div id={styles.botaosBanner}>
                        <button id={styles.botaoChamar}>Chamar atendente</button>
                        <button id={styles.botaoCardapio}>Ver cardápio</button>
                    </div>
                </section>

                <section id={styles.destaques}>
                    <div id={styles.imagemEsquerda}>
                        <p className={styles.paragrafoDestaque}>Os queridinhos da galera</p>
                        <h3 className={styles.h3Destaque}>MAIS PEDIDOS</h3>
                    </div>
                    <div id={styles.imagensDireita}>
                        <div id={styles.imagensDireitaCima}>
                            <p className={styles.paragrafoDestaque}>Lanches com</p>
                            <h3 className={styles.h3Destaque}>MUITO BACON</h3>
                        </div>
                        <div id={styles.imagensDireitaBaixo}>
                            <p className={styles.paragrafoDestaque}>Se tiver muita fome</p>
                            <h3 className={styles.h3Destaque}>SUPER COMBOS</h3>
                        </div>
                    </div>
                </section>

                <section id={styles.cardapio}>
                    <div id={styles.titulo}>
                        <h2>Cardapio</h2>
                    </div>
                    <div id={styles.botaoscardapio}>
                        <button id={styles.botaofiltrar}>Filtrar</button>
                        <button id={styles.botaopromocao}>Promoçãoes</button>
                        <button id={styles.botaoproduto}>Produtos</button>
                    </div>
                    <div id={styles.cardsproduto}>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                    
                </section>

                <section id={styles.unidades}>
                    <img id={styles.imagemUnidade} src="../../imgs/WhatsApp_Image_2026-03-30 at 10.41.07.jpeg" alt="" />
                    <div id={styles.nossasUnidade}>
                        <h3 id={styles.h3Unidade}>NOSSAS UNIDADES</h3>
                        <ul id={styles.listaUnidades}>
                            <li>Centro – Av. Aurora, 742</li>
                            <li>Jardim – Av. das Palmeiras, 128</li>
                            <li>Norte – Av. Horizonte, 305</li>
                            <li>Sul – Av. Nova Esperança, 910</li>
                        </ul>
                    </div>

                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Home