import styled from 'styled-components';

export const Card = styled.div`
    width: 256px;
    height: 320px;
    border-radius: 8px;
    background-color: #1e1e1e;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 571px) {
        width: 100%;
    }
    
    .teste {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.25s ease-in;
    }

    &:hover {
        .teste {
            visibility: visible;
            opacity: 1;
        }
    }
`;

export const Title = styled.span`
    color: #FFFFFF;
    font-weight: 500;
    font-size: 32px;
    font-weight: 300;
    padding-left: 22px;
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

export const Banner = styled.div`
    height: 100%;
    width: 100%;
    background: url(https://alkuwaiti.com/wp-content/uploads/2020/05/Hero-Banner-Placeholder-Dark-1024x480.png);
    background-size: cover;
`;

export const ProfileImage = styled.div`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 6px solid #1e1e1e;
    position: absolute;
    top: 16px;
    left: 16px;
    background: url(https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg);
    background-size: cover;
`;

export const ActionsIcons = styled.div`
    position: absolute;
    display: flex;
    flex-flow: row wrap;
    gap: 8px;
    top: 76px;
    right: 8px;
    

    svg {
        color: #BEBEBE;
        transition: color 0.2s ease-in;
        cursor: pointer;

        &:hover {
            color: #FFFFFF;
        }

    }
    
`;