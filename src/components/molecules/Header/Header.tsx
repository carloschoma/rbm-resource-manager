import * as Styled from "./Header-style";
import React from 'react'

export interface  HeaderPropsInterface
  extends React.HTMLAttributes<HTMLElement> {}

export default function Header({children, className, ...rest}: HeaderPropsInterface) {
    return (
        <Styled.StyledHeader className={className}>
          {children}
        </Styled.StyledHeader>
    )
}