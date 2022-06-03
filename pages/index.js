import Head from "next/head";
import Header from "../src/components/Header";
import Products from "../src/components/Products";
import ShoppingCart from "../src/components/ShoppingCart";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Carrinho</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <Products />
                <ShoppingCart />
            </main>
            <footer className={""}></footer>
        </div>
    );
}
