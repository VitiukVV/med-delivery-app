import {
    Btn,
    CardWrapper,
    Img,
} from "./medicineItem.styled";
import placeholder from "../images/placeholder.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/shop/shopSlice";

// eslint-disable-next-line react/prop-types
const MedicineItem = ({ id, drugName, price }) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({ id, drugName, price, quantity: 1 }));
        alert(drugName + " added to cart!");
    };

    return (
        <CardWrapper>
            <Img src={placeholder} alt={drugName} />
            <h2>{drugName}</h2>
            <p>{price} UAH</p>
            <Btn type="button" onClick={handleAddToCart}>
                Add to cart
            </Btn>
        </CardWrapper>
    );
};

export default MedicineItem;
