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

export const Header = styled.div`
    width: 100%;
    height: 64px;
    position: relative;
    margin-bottom: 28px;
`;

type ImageProps = {
    loremIpsumNumber: number;
}

export const Banner = styled.div<ImageProps>`
    height: 100%;
    width: 100%;
    background: ${({loremIpsumNumber}) => `url(https://picsum.photos/40${loremIpsumNumber}/15${loremIpsumNumber})`};
    background-size: cover;
`;

export const ProfileImage = styled.div<ImageProps>`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 6px solid #1e1e1e;
    position: absolute;
    top: 16px;
    left: 16px;
    background: ${({loremIpsumNumber}) => `url(https://picsum.photos/7${loremIpsumNumber}/7${loremIpsumNumber})`};
    background-size: cover;
`;