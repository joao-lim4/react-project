import React from 'react';
import { FullViewMain, ViewFullScreen } from './styles/Styles'
import HeaderComponent from './components/header/Header.component';
import GlobalFont from './fonts/Fonts';
import BodyImageComponent from './components/image-body/ImageBody.component';

export default props => {
    return (    
       <FullViewMain>
           <GlobalFont/>
           <ViewFullScreen>
                <HeaderComponent />
                <BodyImageComponent />
           </ViewFullScreen>
       </FullViewMain>
    );
}


