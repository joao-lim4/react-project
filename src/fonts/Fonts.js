import styled, { createGlobalStyle } from 'styled-components';
import PoppinsFont from './Poppins.ttf'

export default createGlobalStyle`
    @font-face{
        font-family: 'Poppins';
        src: local('Poppins'),
        url(${PoppinsFont}) format('ttf');
    }
`;