import React from 'react'
import Text from 'components/particules/Text/Text';
import * as Styled from'./Main-style';
import Login from '../Login/Login';

export default function Main() {
    return (
        <Styled.StyledMain> 
            <>
                <Styled.StyledSection>
                    <Text tag={'h1'} fontSize={'62.18'}> Lorem ipsum </Text>
                    <Text tag={'h1'}> Lorem ipsum </Text>
                </Styled.StyledSection>
            </>
            <>
                <Styled.StyledSection>
                    <Styled.styledDiv>
                    <Styled.styledFrame>
                        <Login/>
                        </Styled.styledFrame>
                    </Styled.styledDiv>
                </Styled.StyledSection>
            </>
        </Styled.StyledMain>
    );  
} 