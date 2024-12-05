import { useContext } from "react";
import Product from "./Product";
import { CircularProgress } from "@mui/material";
import { CartContext } from "../context/CartContext";
import { Search } from "@mui/icons-material";

export default function Shop() {

    const { products, loading, error } = useContext(CartContext);


    useEffect(() => {
        if(products) {
setFilteredItems(products);
        }
    }, [products]);

 function handleSearch() {
    const term = SearchInput.current.value.toLowerCase();
    setFilteredItems(


        function clearSearch() {
            SearchInput.current.value = "";
            setFilteredItems(products);
        }
    )
 }
    return (
        <ul id="products">
             {error && <p>{error}</p>}
                {!loading && products ? (
                    products.map((product) => (
                        {loading &&
                            <div id="loading">
                            <CircularProgress...</p>
                            </div>
                        }
                        {!loading && !error && FilteredItems.length > 0 ? (
                            FilteredItems.map((product) => (
                                <li key={product.id}>
                                    <Product {...product} />
                                </li>
                            ))
                ) : (
                    <div id="loading">
                    <CircularProgress size="10rem"
                    color="inherit" />
                    <p>loading products...</p>
                    </div>
                    <p>Not found!</p>
                )}
                </ul>

                </Selection>
            );
        }
                  