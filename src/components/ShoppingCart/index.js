import React from "react";
import { CartContext } from "../../../context/Cart";
import Divider from "../Divider";
import IfComponent from "../IfComponent";
import Item from "./Item";
import styles from "./styles.module.css";

export default function ShoppingCart() {
    const [total, setTotal] = React.useState("13,00");
    const provider = React.useContext(CartContext);
    const getTotal = () => {
        let valor = 0;
        provider.items.forEach((item) => {
            valor += item.price / 100 - 0.3;
        });
        setTotal(valor);
    };

    React.useEffect(() => {
        getTotal();
    }, [provider.items]);
    console.log(provider);
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Meu Carrinho</h1>
                </div>
                <Divider />
                <div className={styles.items}>
                    {provider.items
                        ? provider.items.map((item) => (
                              <Item product={item} key={item.id} />
                          ))
                        : ""}
                </div>
                <Divider />
                <div className={styles.total}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div>Total</div>
                        <div>
                            {total.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </div>
                    </div>
                    <IfComponent condition={total > 10}>
                        <span>
                            <h1>Parabéns, sua compra tem frete grátis</h1>
                        </span>
                    </IfComponent>
                </div>
                <Divider />
                <div className={styles.action}>
                    <button className={styles.btn_action}>
                        Finalizar Compra
                    </button>
                </div>
            </div>
        </div>
    );
}
