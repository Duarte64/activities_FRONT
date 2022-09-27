import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin-bottom: 8px;
`;

export const Input = styled.input`
    background-color: #1e1e1e;
    border: 1px solid #888;
    border-radius: 24px;
    color: white;
    height: 32px;
    padding: 0px 12px;
    font-size: 18px;
    font-weight: 200;
    width: 100%;
`;

export const Button = styled.div`
    background-color: #1e1e1e;
    border: 1px solid #888;
    border-radius: 24px;
    color: white;
    height: 32px;
    padding: 4px 4px;
    font-size: 16px;
    font-weight: 200;
    overflow: hidden;
    width: 32px;
    cursor: pointer;
    transition: 0.3s width ease-in-out;
    white-space: nowrap;
    position: relative;

    span {
        position: absolute;
        top: 6px;
        left: 32px;
    }

    &:hover {
        cursor: pointer;
        width: 140px; // animating to full width on hover
    }
`;