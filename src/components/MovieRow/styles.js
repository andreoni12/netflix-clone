import styled from 'styled-components';

export const ListArea = styled.div`
    overflow-x: hidden;
	padding-left: 30px;
`;

export const List = styled.div`
    transition: all ease 0.5s;
`;

export const Item = styled.div`
    display: inline-block;
	width: 180px;
    cursor: pointer;
    
    img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;
    }

    img:hover {
        transform: scale(1);
    }
`;

export const Navigator = styled.div`
    position: absolute;
	width: 40px;
	height: 272px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.2s;

    @media (max-width: 760px) {
		opacity: 1;
	}
`;

export const Left = styled(Navigator)`
    left: 0;
`;

export const Right = styled(Navigator)`
    right: 0;
`;

export const MovieRow = styled.div`
    margin-bottom: 30px;
    
    h2 {
        margin: 0px 0px 0px 30px;
    }

    &:hover {
        ${Navigator} {
            opacity: 1;
        }
    }
`;