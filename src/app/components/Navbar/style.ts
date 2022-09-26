import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;

    svg {
        cursor: pointer;
    }
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
`;

export const ListItem = styled.li`
    color: #FFFFFF;
    font-weight: 500;
    font-size: 22px;
    display: inline-block;
    position: relative;
    cursor: pointer;

    &:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 3px;
        bottom: -4px;
        left: 0;
        background-color: #FFFFFF;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;