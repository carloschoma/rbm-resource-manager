import React from 'react'
import Text from 'components/particules/Text/Text';
import * as Styled from'./Login-style';
import Logoimg from 'components/particules/Logoimg/Logoimg';
import SpanInput from 'components/atoms/SpanInput/SpanInput';



export default function Login() {
    return (
        <Styled.StyledLogin>
        <Logoimg/>
        <>
        <SpanInput spanText='E-mail' type='text' placeholder='email@rbmweb.com.br'/>
        </>
        </Styled.StyledLogin>
    );  
} 