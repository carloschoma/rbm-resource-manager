import React from 'react'
import Text from 'components/particules/Text/Text';
import * as Styled from'./Login-style';
import Logoimg from 'components/particules/Logoimg/Logoimg';
import SpanInput from 'components/atoms/SpanInput/SpanInput';
import Button from 'components/particules/Button/Button';



export default function Login() {
    return (
        <Styled.StyledLogin>
        <Logoimg/>
       <Text tag={'h1'}>Entrar na minha conta</Text>
       <Text tag={'p'} weight="400">Entrar na minha conta</Text>
        <SpanInput spanText='E-mail' type='text' placeholder=' email@rbmweb.com.br'/>
        <SpanInput spanText='Senha' type='password' placeholder=' Digite a sua senha'/>
   <Button>Entar</Button>
        </Styled.StyledLogin>
    );  
} 