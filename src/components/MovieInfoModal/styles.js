import styled from 'styled-components';

export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    bottom: 0;
    left: 0;
    z-index:20;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalBody = styled.div`
    height: 60%;
    width: 50%;
    border-radius: 4px;
    background-color: #1a1a1a;
`

export const ModalHeader = styled.div`
    height: 40%;
    width: 100%;
    z-index: 25;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-size: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-image:  ${props => `url(https://image.tmdb.org/t/p/original${props.url})`};
`

export const Icon = styled.i`
    opacity: 1;
    mix-blend-mode: difference;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`

export const IconSpan = styled.span`
    padding: 15px;
`

export const Name = styled.div`
    font-size: 30px;
    padding-left: 18px;
    padding-bottom: 10px;
    font-weight: bold;
    align-self: flex-start;
    width: 100%;
    background: linear-gradient(to top, #1a1a1a 15%, transparent 90%);

    @media (max-width: 760px) {
        font-size: 20px;
	}
`

export const ModalContent = styled.div`
    padding: 15px 20px;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    justify-content: flex-start;
`

export const Info = styled.div`
    font-size: 17px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;

    @media (max-width: 760px) {
        font-size: 14px;
	}
`

export const Description = styled.div`
    margin-top: 15px;
    font-size: 16px;
    color: #999;
    max-height: 200px;
    overflow-y: auto;
    padding-right: 15px;

    @media (max-width: 760px) {
        font-size: 14px;
        max-width: 100%;
        margin-right: 30px;
	}
`