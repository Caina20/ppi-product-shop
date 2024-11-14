
import { useContext } from "react";
import Product from "./Products";
import { CircularProgress } from "@mui/material";
import { CartContext } from "./cartcontext";

export default function Shop() {
 
 const{products, loading, error} = useContext(CartContext);

    return (
        <section id="shop">
            <h2>Elegant Products for Everyone</h2>

            <ul id="products">
                {error && <p>{error}</p>}
                {!loading && products ? (
                    products.map((product) => (
                        <li key={product.id}>
                            <Product {...product} />
                        </li>
                    ))
                ) : (
                    <div id="loading">
                        <CircularProgress size="10rem" color="inherit"/>
                        <p>loading ....</p>
                    </div>
                )}
            </ul>

        </section>
    );
}