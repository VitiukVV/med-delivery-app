import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToOrderMedicine, deleteFromCart } from "../../redux/shop/shopSlice";
import placeholder from "../images/placeholder.png";
import { Btn } from "../medicineItem/medicineItem.styled";
import { CardWrapper, Img, SideWrapper } from "./cartMedicineItem.styled";

// eslint-disable-next-line react/prop-types
const CartMedicineItem = ({ id, drugName, price, quantity }) => {
    const [quantityTotal, setQuantityTotal] = useState(quantity);
    const dispatch = useDispatch();
    const handleDeleteFromCart = () => {
        dispatch(deleteFromCart(id));
    };

    const handleChangeQuantity = (e) => {
        setQuantityTotal(parseInt(e.target.value) || quantity);
    };

    useEffect(() => {
        dispatch(addToOrderMedicine({ id, quantity: quantityTotal }));
    }, [dispatch, id, quantityTotal]);

    return (
        <CardWrapper>
            <Img src={placeholder} alt={drugName} />
            <SideWrapper>
                <h2>{drugName}</h2>
                <p>{price} UAH</p>
                <label>
                    Quantity:
                    <input
                        type="number"
                        value={quantityTotal}
                        onChange={handleChangeQuantity}
                    />
                </label>
                <Btn type="button" onClick={handleDeleteFromCart}>
                    Delete from cart
                </Btn>
            </SideWrapper>
        </CardWrapper>
    );
};

export default CartMedicineItem;
