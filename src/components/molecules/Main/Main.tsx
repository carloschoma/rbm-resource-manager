import React, { useState } from 'react'
import Text from 'components/particules/Text/Text';
import * as Styled from'./Main-style';
import Login from '../Login/Login';
import { StyledDiv } from '../Login/Login-style';
import { styledDiv } from './Main-style';

export default function Main() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    // como fazer o login chegar no botão do componente Login?
    function login(){
        let raw = JSON.stringify({
            "login": email,
            "senha": senha,
        })
        let requestOptions = {
            method: 'POST',
            body: raw,
        };

        fetch("https://agendamento.carloschoma.com.br/login", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }


    return (
        <Styled.StyledMain>
 
            <Styled.StyledSection>
                <Styled.StyledDiv>
                    <Text tag={'h1'} fontSize={'62.1797'} color={'#0092D4'} weight={'700'} lineHeight={'93.27'}> Lorem ipsum </Text>
                    <Text tag={'label'} fontSize={'31.0898'} color={'#46494B'} 
                        weight={'400'} height={'32'} lineHeight={'31.09'}
                        padding={'0 0 0 0'} margin={'-50px 0 0 0'}> Lorem ipsun 🚀 </Text>
                    <Text tag={'p'}fontSize={'18.6539'} color={'#0092D4'} 
                        weight={'500'} height={'32'} lineHeight={'31'}
                        padding={'0 0 0 0'} margin={'0 0 0 0'}>
                        Loren&nbsp;&nbsp;&nbsp;●&nbsp;&nbsp;&nbsp;Loren
                        &nbsp;&nbsp;&nbsp;●&nbsp;&nbsp;&nbsp;Loren
                        &nbsp;&nbsp;&nbsp;●&nbsp;&nbsp;&nbsp;Loren 
                    </Text>
                    <Text tag={'p'} fontSize={'18.65'} color={'#46494B'} weight={'400'} width={'491.74'}> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                    <Text tag={'p'} fontSize={'18.65'} color={'#46494B'} weight={'700'}> Equipe </Text>
                    <Text tag={'label'} fontSize={'18.6539'} color={'#46494B'} 
                        weight={'400'} height={'32'} lineHeight={'31'}
                        padding={'0 0 0 0'} margin={'0 0 0 0'}> 🚀 Lorem ipsun </Text>
                    <Text tag={'label'} fontSize={'18.6539'} color={'#46494B'} 
                        weight={'400'} height={'32'} lineHeight={'31'}
                        padding={'0 0 0 0'} margin={'0 0 0 0'}> 🚀 Lorem ipsun </Text>
                    <Text tag={'label'} fontSize={'18.6539'} color={'#46494B'} 
                        weight={'400'} height={'32'} lineHeight={'31'}
                        padding={'0 0 0 0'} margin={'0 0 0 0'}> 🚀 Lorem ipsun </Text>
                    <Text tag={'label'} fontSize={'18.6539'} color={'#46494B'} 
                        weight={'400'} height={'32'} lineHeight={'31'}
                        padding={'0 0 0 0'} margin={'0 0 0 0'}> 🚀 Lorem ipsun </Text>
                    <Text tag={'label'} fontSize={'18.6539'} color={'#46494B'} 
                        weight={'400'} height={'32'} lineHeight={'31'}
                        padding={'0 0 0 0'} margin={'0 0 0 0'}> 🚀 Lorem ipsun </Text>
                    <Text tag={'label'} fontSize={'18.6539'} color={'#46494B'} 
                        weight={'400'} height={'32'} lineHeight={'31'}
                        padding={'0 0 0 0'} margin={'0 0 0 0'}> 🚀 Lorem ipsun </Text>
                    <Text tag={'label'} fontSize={'18.6539'} color={'#46494B'} 
                        weight={'400'} height={'32'} lineHeight={'31'}
                        padding={'0 0 0 0'} margin={'0 0 0 0'}> 🚀 Lorem ipsun </Text>
                </Styled.StyledDiv>
            </Styled.StyledSection>

            <Styled.StyledSection>
                <Styled.styledDiv>
                <Styled.styledFrame>
                    <Login/>
                    </Styled.styledFrame>
                </Styled.styledDiv>
            </Styled.StyledSection>

        </Styled.StyledMain>
    );  
} 
