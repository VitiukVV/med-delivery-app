import { Form, Input, Label } from "./CartForm.styled";

// eslint-disable-next-line react/prop-types
const CartForm = ({ formData, setFormData }) => {
    // eslint-disable-next-line react/prop-types
    const { name, phone, email, address } = formData;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <Form>
            <Label>
                Name:
                <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                />
            </Label>
            <Label>
                Email:
                <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                />
            </Label>
            <Label>
                Phone:
                <Input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                    required
                />
            </Label>
            <Label>
                Address:
                <Input
                    type="text"
                    name="address"
                    value={address}
                    onChange={handleChange}
                    required
                />
            </Label>
        </Form>
    );
};

export default CartForm;
