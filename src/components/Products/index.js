/* eslint-disable @next/next/no-img-element */
import React from "react";
import { toast } from "react-toastify";
import { CartContext } from "../../../context/Cart";
import styles from "./styles.module.css";
const url_api = process.env.NEXT_PUBLIC_API;
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
        } catch (error) {}
    };
    React.useEffect(() => {
        GetProducts();
    }, []);
    const addProduct = (product) => {
        if (provider.items.includes(product)) {
            toast.dismiss();
            toast.error("o produto já está no carrinho");
            return;
        }
        provider.setItems((list) => [...list, product]);
        toast.dismiss();
        toast.success("Produto adicionado ao carrinho");
    };
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
                                addProduct(product);
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
