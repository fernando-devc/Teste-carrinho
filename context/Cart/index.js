import React, { createContext } from "react";
export const CartContext = createContext({
    items: [],
    setItems: () => {},
});
export const CartProvider = ({ children }) => {
    const [items, setItems] = React.useState([]);
    const [Total, setTotal] = React.useState([]);
    const context = {
        Total,
        items,
        setItems,
    };
    return (
        <CartContext.Provider value={context}>{children}</CartContext.Provider>
    );
};
