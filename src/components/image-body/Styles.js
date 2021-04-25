import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const ImageLogo = styled.img`
    width: 400px;
    height: 400px;
    max-width: 400px;
    max-height: 400px;
    min-width: 150px;
    min-height: 150px;
    animation: rotate ${props => `${props.time}s`} linear infinite;
`;

