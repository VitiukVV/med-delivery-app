import { useDispatch, useSelector } from "react-redux";
import CartForm from "../../cartForm/CartForm";
import CartMedicine from "../../cartMedicine/CartMedicine";
import { selectDrugsInCart } from "../../../redux/shop/shopSelectors";
import { Section, Wrapper } from "./shoppingCart.styled";
import { Btn } from "../../medicineItem/medicineItem.styled";
import { postOrder } from "../../../redux/shop/shopOperations";
import { useState } from "react";

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const totalOrder = useSelector(selectDrugsInCart);
    const totalPrice = totalOrder.reduce((acc, cur) => {
        return acc + Number(cur.price) * cur.quantity;
    }, 0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const order = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phone,
        address: formData.address,
        orderMedicines: totalOrder,
        totalPrice,
    };

    const handleSubmitOrder = () => {
        if (
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.address
        ) {
            alert("Please fill all fields");
            return;
        }
        dispatch(postOrder(order));
        alert(`Your order has been sent! Total price: ${totalPrice}UAH`);
    };
    return (
        <Section>
            <Wrapper>
                <CartForm formData={formData} setFormData={setFormData} />
                <CartMedicine />
            </Wrapper>
            <Wrapper>
                <p>Total price: {totalPrice}</p>
                <Btn onClick={handleSubmitOrder}>Submit</Btn>
            </Wrapper>
        </Section>
    );
};

export default ShoppingCart;
