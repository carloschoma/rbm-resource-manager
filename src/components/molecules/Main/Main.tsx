import React from 'react'
import Text from 'components/particules/Text/Text';
import * as Styled from'./Main-style';

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
                    <Styled.styleddiv>
                    <Styled.styledFrame/>
                    </Styled.styleddiv>
                </Styled.StyledSection>
            </>
        </Styled.StyledMain>
    );  
} 