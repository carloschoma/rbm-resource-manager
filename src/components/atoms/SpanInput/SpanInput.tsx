import Input from 'components/particules/Input/Input';
import Text from 'components/particules/Text/Text';
import React from 'react'
import * as Styled from "./SpanInput-style";

type SpanInputProps = {
    childrenSpan: string
};

export default function SpanInput(props: SpanInputProps) {
  return (
    <Styled.StyledDiv>
        <Text tag={'span'}>{props.childrenSpan}</Text>
        <Input />
    </Styled.StyledDiv>
  )
}
