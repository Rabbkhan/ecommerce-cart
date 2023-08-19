
import Header from "./components/Layout/Header";
import CartPageUI from "./components/Cart/CartPageUI";
// import Cart from "./components/Cart/cart";
import CartProvider from "./components/context/CartProvider";

function App() {
  return (
    <CartProvider>
    <Header/>
    <CartPageUI/>
    </CartProvider>
  );
}

export default App;
