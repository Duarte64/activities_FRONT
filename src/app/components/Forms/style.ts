import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 16px;
`;

export const Form = styled.form`
    display: flex;
    flex-flow: column;
    gap: 24px;
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
    &:nth-child(4) {
        width: 360px;
    }

    @media screen and (max-width: 768px) {
        width: 100% !important;
    }
`;

export const Textarea = styled.textarea`
    background-color: #1e1e1e;
    border: 1px solid #888;
    border-radius: 6px;
    color: white;
    padding: 0px 12px;
    font-size: 18px;
    font-weight: 200;
    width: 100%;
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
    margin: auto;
    
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const FormTitle = styled.h3`
    color: #D2D2D2;
    font-size: 24px;
    padding: 0px 0px 24px 0px;
    display: inline-block;
    width: 100%;
    text-align: center;
`;

export const Select = styled.select`
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