import styled from "styled-components";

export const ShopBtn = styled.button`
    cursor: pointer;
    padding: 4px 14px;
    margin: 15px auto 0;
    color: #fff;
    font-size: 12px;
    line-height: 1.2;
    text-align: center;
    text-transform: uppercase;
    background: #1e2827;
    border-radius: 10px;
    border: 1px solid transparent;

    &:hover,
    :focus {
        background-color: white;
        color: black;
        border: 1px solid white;
        border-radius: 10px;
        transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
            background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
            color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    ${(props) =>
        props.active &&
        `
            background-color: #4CAF50;
        `}
`;
