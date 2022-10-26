import * as Styled from "./Input-style";
import React from 'react'

export interface InputPropsInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {}
export default function Input({children, className, ...rest}: InputPropsInterface) {
    return (
        <Styled.StyledInput {...rest} className={className}/>
    )
}
