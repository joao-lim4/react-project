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
                <NameProject>Markdown preview</NameProject>
            </ViewName>
            <ViewRedes>
                <LogoInstagram 
                    color={'#494949'}
                    height="20px"
                    cssClasses="cursor"
                    width="20px"
                    title="Instagram icon to redirect"
                    onClick={() => redirectToUrl('https://www.instagram.com/joao_lim4/')}
                />
                <LogoWhatsapp 
                    color={'#494949'}
                    height="20px"
                    cssClasses="margin-left cursor"
                    title="Whatsapp icon to redirect"
                    width="20px"
                    onClick={() => redirectToUrl('https://api.whatsapp.com/send/?phone=%2B5531989013076&text=Olá%20vim%20pelo%20primeiro%20projeto%20feito%20em%20react&app_absent=0&lang=pt_br')}
                />
                {/* <NameUser>Lima</NameUser> */}
            </ViewRedes>
        </Container>
    )
}