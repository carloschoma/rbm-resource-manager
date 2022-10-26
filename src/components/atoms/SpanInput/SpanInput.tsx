import Input from "components/particules/Input/Input";
import Text from "components/particules/Text/Text";
import React from "react";
import * as Styled from "./SpanInput-style";

type SpanInputProps = {
  childrenSpan: string;
  span?: boolean
};

export default function SpanInput(props: SpanInputProps) {
  return (
    <Styled.StyledDiv>
      {props.span && <Text tag={"span"}>{props.childrenSpan}</Text>}
      <Input color="red"/>
      <Styled.StyledInput></Styled.StyledInput>
    </Styled.StyledDiv>
  );
}
