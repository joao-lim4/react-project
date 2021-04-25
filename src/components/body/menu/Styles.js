import styled from 'styled-components';

export const Container = styled.div`
    flex: .25;
    display: row;
    flex-direction: column;

    @media(max-width: 1024px){
        margin-bottom: 30px;
    }


    @media(max-width: 596px){
        max-height: 50px;
    }
`;

export const Relative = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 5px 1px #dbdbdb;
    border-radius: 10px 10px 10px 10px;

    @media(max-width: 1024px){
        flex-direction: row;
    }
`;

export const BoxArquivos = styled.div`
    width: 100%;
    height: 50px;
    overflow: hidden;
    display: flex;
    background-color: #fafafa;
    cursor: pointer;
    align-items: center;
    position: relative;

    @media(max-width: 1024px){
        ${props => {
            let str = `width: ${(100 / props.len).toFixed(2)}%;`;

            if(props.index == 0){
                str = str + `border-radius: 10px 0 0 10px;`;
            }

            
            if(props.index == props.len - 1){
                str = str + `border-radius: 0 10px 10px 0px;`;
            }

            return str;
        }}

    }

    @media(min-width: 1024px){
        ${props => {
            if(props.index == 0){
                return `border-radius: 10px 10px 0px 0px;`;
            }


            if(props.index == props.len - 1){
                return `border-radius: 0 0px 10px 10px;`;
            }
        }}
    }


`;

export const Mark = styled.div`
    width: 7px;
    margin-right: 10px;
    height: 100%;
    background-color: #dbdbdb;
    position: absolute;
    left: 0;
    top: 0;

    @media(max-width: 1024px){
        width: 100%;
        margin-right: 0px;
    }
`;

export const TextNameArquivo = styled.span`
    font-size: 17px;
    font-family: 'Poppins';
    color: #494949;
    margin-left: 20px;
    
    @media(max-width: 1024px){
        margin-left: 0px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
    }

`;