import React from 'react'
import Text from 'components/particules/Text/Text';
import * as Styled from'./Main-style';

export default function Main() {
    return (
        <Styled.StyledMain> 
            <Styled.StyledSection>
                <Styled.StyledDiv>
                    <Text tag={'h1'} fontSize={'62.18'} color={'#0092D4'} weight={'700'}> Lorem ipsum </Text>
                    <Text tag={'p'} fontSize={'18.65'} color={'#46494B'} weight={'400'}> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                    <Text tag={'p'} fontSize={'18.65'} color={'#46494B'} weight={'700'}> Lorem ipsum </Text>

                </Styled.StyledDiv>
                
            </Styled.StyledSection>

            <Styled.StyledSection>2222222222222222222222222222222222222222222222</Styled.StyledSection>
        </Styled.StyledMain>
    );  
} 
