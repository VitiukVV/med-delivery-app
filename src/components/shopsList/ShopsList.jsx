import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopsName } from "../../redux/shop/shopOperations";
import { selectAllShops } from "../../redux/shop/shopSelectors";
import ShopsItem from "../shopsItem/ShopsItem";
import { List, Wrapper } from "./shopList.styled";

// eslint-disable-next-line react/prop-types
const ShopsList = ({ activeShop, setActiveShop }) => {
    const dispatch = useDispatch();
    const allShopsName = useSelector(selectAllShops);

    useEffect(() => {
        dispatch(fetchShopsName());
    }, [dispatch]);

    return (
        <Wrapper>
            <h2>Shops:</h2>
            <List>
                {allShopsName.map(({ _id, pharmacyName }) => {
                    return (
                        <ShopsItem
                            key={_id}
                            pharmacyName={pharmacyName}
                            setActiveShop={setActiveShop}
                            activeShop={activeShop}
                        ></ShopsItem>
                    );
                })}
            </List>
        </Wrapper>
    );
};

export default ShopsList;
