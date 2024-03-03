import { ShopBtn } from "./shopsItem.styled";

// eslint-disable-next-line react/prop-types
const ShopsItem = ({ pharmacyName, setActiveShop, activeShop }) => {
    const handleButtonClick = () => {
        setActiveShop(pharmacyName);
    };

    return (
        <ShopBtn
            type="button"
            onClick={handleButtonClick}
            active={activeShop === pharmacyName ? "true" : ""}
        >
            {pharmacyName}
        </ShopBtn>
    );
};

export default ShopsItem;
