import ExampleAtom from "components/atoms/example-atom/example-index";
import Header from "components/molecules/Header/Header";
import SpanInput from "components/atoms/SpanInput/SpanInput";
import Input from "components/particules/Input/Input";
import Text from "components/particules/Text/Text";
import React from "react";
import Main from 'components/molecules/Main/Main';
import Logoimg from "components/particules/Logoimg/Logoimg";

export default function ExamplePage() {
  return (
    <>
      <Header>
       <Logoimg />
      </Header>
      <Main />
      {/* <ExampleAtom /> */}
      {/* <SpanInput type="text" placeholder="Digite seu e-mail" spanText="E-mail"/> */}
    </>
  );
}
