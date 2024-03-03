import { Route, Routes } from "react-router-dom";
import AppBar from "./appBar/AppBar";
import Shop from "./page/shop/Shop";
import ShoppingCart from "./page/shoppingCart/ShoppingCart";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<AppBar />}>
                    <Route index element={<Shop />} />
                    <Route path="/shopping-cart" element={<ShoppingCart />} />
                    <Route path="*" element={<Shop />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
