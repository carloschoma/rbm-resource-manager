import React from "react";
import Text from "components/particules/Text/Text";
import * as Styled from "./Login-style";
import Logoimg from "components/particules/Logoimg/Logoimg";
import SpanInput from "components/atoms/SpanInput/SpanInput";
import Button from "components/particules/Button/Button";

export default function Login() {
  return (
    <Styled.StyledLogin>
        <Styled.StyledDiv>
      <Logoimg />
      <Text tag={"h1"} margin="54px 0px 10px 0px">Entrar na minha conta</Text>
      <Text tag={"p"} margin="0px 0px 32px 0px" weight="400">Acesse sua conta abaixo =)</Text>
      </Styled.StyledDiv>
      <SpanInput
        spanText="E-mail"
        type="text"
        placeholder=" email@rbmweb.com.br"
      />
      <SpanInput
        spanText="Senha"
        type="password"
        placeholder=" Digite a sua senha"
      />
      <Button>Entar</Button>
    </Styled.StyledLogin>
  );
}
