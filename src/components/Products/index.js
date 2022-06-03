import React from "react";
import { CartContext } from "../../../context/Cart";
import styles from "./styles.module.css";
const url_api = "http://localhost:3000/api/get_products";
export default function Products() {
    const [loading, setLoading] = React.useState(false);
    const [products, setProucts] = React.useState([]);
    const provider = React.useContext(CartContext);
    const GetProducts = async () => {
        try {
            setLoading(true);
            const res = await fetch(url_api);
            const data = await res.json();
            setProucts(data.items);
            console.log(data);
        } catch (error) {}
    };
    React.useEffect(() => {
        GetProducts();
    }, []);
    return (
        <div className={styles.listProducts}>
            {products.map((product) => (
                <div key={product.id} className={styles.product}>
                    <img src={product.imageUrl} alt="produto" />
                    <div className={styles.description}>
                        <h5>{product.name}</h5>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <div>
                                {" "}
                                Preço :{" "}
                                {(product.price / 100 - 0.3).toLocaleString(
                                    "pt-br",
                                    {
                                        style: "currency",
                                        currency: "BRL",
                                    }
                                )}
                            </div>
                            <span className={styles.oferta}>
                                (
                                {(product.price / 100).toLocaleString("pt-br", {
                                    style: "currency",
                                    currency: "BRL",
                                })}
                                )
                            </span>
                        </div>
                        <button
                            onClick={(e) => {
                                provider.setItems((list) => [...list, product]);
                            }}
                            className={styles.btn_action}
                        >
                            Adicionar ao carrinho
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
