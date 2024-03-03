import styled from "styled-components";

export const Form = styled.form`
    padding: 20px;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

export const Label = styled.label`
    display: flex;
    gap: 8px;
    flex-direction: column;
    font-weight: 500;
    line-height: 18px;
    color: rgb(138, 138, 137);
`;

export const Input = styled.input`
    border-radius: 14px;
    background: rgb(247, 247, 251);
    padding: 14px 89px 14px 18px;
    border: none;
`;
