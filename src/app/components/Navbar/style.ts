import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    height: 4rem;

    ul {
        display: flex;
        align-items: center;
        gap: 2rem;
        list-style: none;
        width: 100%;
        max-width: 1600px;
        margin: auto;

        li {
            color: #FFFFFF;
            font-weight: 500;
            font-size: 22px;
        }
    }
`;