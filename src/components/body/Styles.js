import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
`;

export const DefaultView = styled.div`
    width: 70%;
    margin-bottom: 100px;
    display: flex;

    @media(max-width: 1024px){
        flex-direction: column;
    }

    @media(max-width: 596px){
        width: 90%;
    }
`;


export const ContainerMarkdow = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 500px;
    max-height: 70vh;
    border: none;
    margin-left: 15px;
    border-radius: 15px;
    background-color: #fafafa;
    overflow: hidden;
    box-shadow: 0px 0px 5px 1px #dbdbdb;

    @media(max-width: 1024px){
        margin-left: 0px;
    }
`;

export const ViewTitle = styled.div`
    width: 100%;
    height: 45px;
    min-height: 45px;
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    padding: 0px 20px 0px 20px;
    align-items: center;
`;

export const Title = styled.span`
    font-size: 18px;
    font-family: 'Poppins';
    color: #494949;
`;

export const ViewMarckDown = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 15px;
`;