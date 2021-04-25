import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #1c1f25;
    padding: 0 30px 0 30px;
    display: flex;
    justify-content: space-around;
    flex-direction: row;  
`;

export const ViewName = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: row;
`;

export const ImageLogo = styled.img`
    width: 50px;
    height: 50px;
`;

export const NameProject = styled.span`
    color: #ffffff;
    font-family: 'Poppins';
    font-size: 10px;
`;

export const ViewRedes = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const NameUser = styled.span`
    color: #ffffff;
    font-family: 'Poppins';
    font-size: 17px;
    margin: 0 0 0 10px;
`;
