import * as Styled from "./Button-style";
import React from 'react'

export interface ButtonPropsInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export default function Button({children, className, ...rest}: ButtonPropsInterface) {
    return (
        <Styled.StyledButton {...rest} className={className}>ENTRAR</Styled.StyledButton>
    )
}


