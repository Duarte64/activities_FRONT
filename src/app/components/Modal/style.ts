import styled from "styled-components";

export const ModalZone = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #060606;
    border-radius: 5px;
    padding: 16px;

    svg {
        cursor: pointer;
    }
`;