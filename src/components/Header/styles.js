import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background: transparent;
    transition: all ease 0.4s;

    ${({ blackHeader }) => blackHeader && `
        background-color: #141414;
    `}
`;

export const Logo = styled.div`
    height: 25px;

    img {
        height: 100%;
    }
`;

export const User = styled.div`
    height: 35px;

    img {
        height: 100%;
        border-radius: 3px;
    }
`;