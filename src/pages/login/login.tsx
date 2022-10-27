import * as Styled from "./login-style";
import SpanInput from "components/atoms/SpanInput/SpanInput";
import React from "react";
import Button from "components/particules/Button/Button";

export default function Login() {
  return (
    <Styled.StyledDiv>
      <SpanInput
        type="text"
        placeholder="Digite seu e-mail"
        spanText="E-mail"
      />
      <Button>ENTRAR</Button>
    </Styled.StyledDiv>
  );
}
