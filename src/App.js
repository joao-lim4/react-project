import React from 'react';
import { FullViewMain, ViewFullScreen } from './styles/Styles'
import HeaderComponent from './components/header/Header.component';
import BodyComponent from './components/body/Body.component';

export default props => {
    return (    
       <FullViewMain>
            <HeaderComponent />
            <BodyComponent />
       </FullViewMain>
    );
}


