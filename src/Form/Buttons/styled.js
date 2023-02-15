import styled from "styled-components";

export const StyledButtons = styled.p`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;  
    grid-gap: 20px;
    padding-top: 15px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.pewter};
    max-width: 250px;
    width: 200px;
    color: ${({ theme }) => theme.color.codGray};
    cursor: pointer;
    font-weight: 700;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.color.scorpion};
    box-shadow: 1px 1px 10px ${({ theme }) => theme.color.mineShaft};
    transition: background 1s, transform 0.5s; 

    &:hover {
    background-color: #bbc3c1;
    transform: scale(1.08);
    }
`;

