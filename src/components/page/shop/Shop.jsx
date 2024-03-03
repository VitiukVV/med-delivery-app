import { useState } from "react";
import MedicineList from "../../medicineList/MedicineList";
import ShopsList from "../../shopsList/ShopsList";
import { Section } from "./shop.styled";

const Shop = () => {
    const [activeShop, setActiveShop] = useState("Drugs 24");

    return (
        <Section>
            <ShopsList setActiveShop={setActiveShop} activeShop={activeShop} />
            <MedicineList activeShop={activeShop} />
        </Section>
    );
};

export default Shop;
