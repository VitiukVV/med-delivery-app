import styled from "styled-components";

export const CardWrapper = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 2px solid black;
    border-radius: 5px;
    padding: 12px;
`;

export const Img = styled.img`
    width: 250px;
    height: 100px;
`;

export const Btn = styled.button`
    width: 150px;
    background-color: var(--color-accent);
    border-radius: 12px;
    color: var(--color-main);
    padding: 12px 20px;
    border: none;
    transition: background-color var(--transition);

    &:hover,
    &:focus {
        background-color: var(--color-hover);
    }
`;
