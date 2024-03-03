import { useSelector } from "react-redux";
import { Wrapper } from "../shopsList/shopList.styled";
import { selectDrugsInCart } from "../../redux/shop/shopSelectors";
import CartMedicineItem from "../cartMedicineItem/CartMedicineItem";
import { List } from "./cartMedicine.styled";

// eslint-disable-next-line react/prop-types
const CartMedicine = () => {
    const drugsInCart = useSelector(selectDrugsInCart);

    return (
        <Wrapper>
            {drugsInCart && (
                <List>
                    {drugsInCart.map(
                        ({ id, drugName, price, quantity }, index) => {
                            return (
                                <CartMedicineItem
                                    key={index}
                                    id={id}
                                    drugName={drugName}
                                    price={price}
                                    quantity={quantity}
                                />
                            );
                        }
                    )}
                </List>
            )}
        </Wrapper>
    );
};

export default CartMedicine;
