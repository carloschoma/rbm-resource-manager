import Input from "components/particules/Input/Input";
import Text from "components/particules/Text/Text";
import React from "react";
import * as Styled from "./SpanInput-style";

type SpanInputProps = {
  spanText: string;
  type: 'password' | 'text' | 'number';
  placeholder?: string;
};

export default function SpanInput(props: SpanInputProps) {
  return (
    <Styled.StyledDiv>
      {props.spanText && <Text tag={"span"}>{props.spanText}</Text>}
      <Input type={props.type} placeholder={props.placeholder}/>
    </Styled.StyledDiv>
  );
}
