import { CartProvider } from "../context/Cart";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    );
}

export default MyApp;
