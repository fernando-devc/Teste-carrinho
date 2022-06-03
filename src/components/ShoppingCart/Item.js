/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CartContext } from "../../../context/Cart";
import styles from "./styles.module.css";
export default function Item({ product }) {
    const provider = React.useContext(CartContext);
    const DeleteItem = (product) => {
        let list = [];
        provider.items.forEach((item) => {
            if (item.id !== product.id) {
                list.push(item);
            }
        });
        provider.setItems(list);
    };
    return (
        <div className={styles.product}>
            {/* <div className={styles.product_box}> */}
            <div
                className={styles.product_box}
                style={{ backgroundImage: `url(${product.imageUrl})` }}
            ></div>
            {/* </div> */}
            <div className={styles.product_description}>
                <div className={styles.product_info}>
                    <h5>{product.name}</h5>
                    <small className={styles.product_discount}>
                        (
                        {(product.price / 100).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        })}
                        )
                    </small>
                    <p>
                        {(product.price / 100 - 0.3).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </p>
                </div>
                <div className={styles.product_quantidade}>
                    {/* <input type="number" style={{}} /> */}
                    <button
                        className={styles.btn_delete}
                        onClick={(e) => DeleteItem(product)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            // className="h-6 w-6"
                            style={{ width: "20px", height: "20px" }}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
