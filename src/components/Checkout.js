import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import Cart from "./Cart";

export default function Checkout() {
    const { items } = useContext(CartContext);

    // Calcular a quantidade total de itens
    const quantity = items.length;

    
    const total = items.reduce((acc, product) => {
        return acc + (product.price * product.quantity);
    }, 0);

    
    const safeTotal = Math.max(total, 0);

    return (
        <section className="checkout">
            <h2>Checkout</h2>

            {/* Exibe os produtos no carrinho */}
            <ul id="products">
                {quantity > 0 ? (
                    items.map((product) => (
                        <li key={product.id}>
                            <Cart {...product} />
                        </li>
                    ))
                ) : (
                    <p>No items in cart!</p>
                )}
            </ul>

            {/* Exibe o valor total do carrinho, apenas se houver itens */}
            {quantity > 0 && (
                <div className="cart-total">
                    <h3>Total: R$ {safeTotal.toFixed(2)}</h3>
                </div>
            )}

            {/* Link para retornar à página inicial */}
            <Link to="/" className="product-actions">
                <button>RETURN</button>
            </Link>
        </section>
    );
}

