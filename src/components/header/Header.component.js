import React from 'react';
import { Container, ViewName, ImageLogo, NameProject, ViewRedes, NameUser } from './Styles';
import LogoReact from '../../logo.svg';
import { LogoInstagram, LogoWhatsapp } from 'react-ionicons';

export default props => {

    const redirectToUrl = url => { 
        if(typeof url === 'string' && url){
            window.open(
                url,
                '_blank'
            );
        }
    }



    return (
        <Container>
            <ViewName>
                <ImageLogo src={LogoReact}/>
                <NameProject>My-first-project</NameProject>
            </ViewName>
            <ViewRedes>
                <LogoInstagram 
                    color={'#ffffff'}
                    height="20px"
                    width="20px"
                    title="Instagram icon to redirect"
                    onClick={() => redirectToUrl('https://www.instagram.com/joao_lim4/')}
                />
                <LogoWhatsapp 
                    color={'#ffffff'}
                    height="20px"
                    cssClasses="margin-left"
                    title="Whatsapp icon to redirect"
                    width="20px"
                    onClick={() => redirectToUrl('https://www.instagram.com/joao_lim4/')}
                />
                {/* <NameUser>Lima</NameUser> */}
            </ViewRedes>
        </Container>
    )
}