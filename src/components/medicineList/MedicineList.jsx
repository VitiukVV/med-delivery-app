import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "../shopsList/shopList.styled";
import { useEffect } from "react";
import { fetchMedicine } from "../../redux/shop/shopOperations";
import { selectAllDrugs } from "../../redux/shop/shopSelectors";
import { List } from "./medicineList.styled";
import MedicineItem from "../medicineItem/MedicineItem";

// eslint-disable-next-line react/prop-types
const MedicineList = ({ activeShop }) => {
    const dispatch = useDispatch();
    const drugsByActiveShop = useSelector(selectAllDrugs);

    useEffect(() => {
        dispatch(fetchMedicine(activeShop));
    }, [activeShop, dispatch]);

    return (
        <Wrapper>
            <List>
                {drugsByActiveShop.map(({ _id, drugName, price }) => {
                    return (
                        <MedicineItem
                            key={_id}
                            id={_id}
                            drugName={drugName}
                            price={price}
                        />
                    );
                })}
            </List>
        </Wrapper>
    );
};

export default MedicineList;
