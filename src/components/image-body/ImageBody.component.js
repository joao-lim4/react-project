import React, { useState } from 'react';
import { Container, ImageLogo, Controls, FullViewRelative, VerticalText, ButtonsView, ButtonAction } from  './Styles';
import LogoReact from '../../logo.svg';
import { Add, Remove } from 'react-ionicons';


export default props => {

    const [time, setTime] = useState({
        time: 10
    });

    const [textHover, setTextHover] = useState('ABRIR');

    const incrementOrDecrementTime = type => {
        if(type === 'increment'){
            setTime(time + 1);
        }else{
            if(time - 0.5 > 0){
                setTime(time - 0.5);
            }
        }
    }

    return (
        <Container>
            <ImageLogo src={LogoReact} time={time.time}/>
        </Container>
    )
}