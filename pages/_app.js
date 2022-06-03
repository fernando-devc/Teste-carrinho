import { ToastContainer } from "react-toastify";
import { CartProvider } from "../context/Cart";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps }) {
    return (
        <CartProvider>
            <ToastContainer />
            <Component {...pageProps} />
        </CartProvider>
    );
}

export default MyApp;
