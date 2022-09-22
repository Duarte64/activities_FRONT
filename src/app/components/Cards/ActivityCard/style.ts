import styled from 'styled-components';

export const Card = styled.div`
    width: 232px;
    height: 320px;
    border-radius: 8px;
    background-color: #1e1e1e;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
    overflow: hidden;
`;

export const Title = styled.span`
    color: #FFFFFF;
    font-weight: 500;
    font-size: 32px;
    font-weight: 300;
`;

export const Legend = styled.p`
    font-size: 14px;
    color: #BEBEBE;
    font-weight: 200;
`;

export const Information = styled.p`
    font-size: 16px;
    color: #BEBEBE;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

export const CardDivisory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-inline: 24px;
`;

export const Footer = styled.div`
    margin-top: 8px;
    color: #BEBEBE;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 6px;
    position: absolute;
    bottom: 16px;
    width: 100%;
    padding-inline: 24px;
`;

export const Divisory = styled.div`
    height: 1px;
    background-color: #BEBEBE;
    width: 100%;
`;