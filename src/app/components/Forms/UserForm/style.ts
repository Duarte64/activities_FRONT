import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-bottom: 16px;
`;

export const Form = styled.form`
    display: flex;
    flex-flow: row wrap;
    gap: 16px;
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
    &:nth-child(4) {
        width: 360px;
    }

    @media screen and (max-width: 768px) {
        width: 100% !important;
    }
`;

export const Button = styled.input`
    background-color: #1e1e1e;
    border: 1px solid #888;
    border-radius: 24px;
    color: white;
    height: 32px;
    padding: 4px 4px;
    font-size: 16px;
    font-weight: 200;
    overflow: hidden;
    width: 120px;
    cursor: pointer;
    transition: 0.3s width ease-in-out;
    white-space: nowrap;
    position: relative;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;