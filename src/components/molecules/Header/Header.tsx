import * as Styled from "./Header-style";
import React from 'react'
import Logoimg from "components/particules/Logoimg/Logoimg";

export interface  HeaderPropsInterface
  extends React.HTMLAttributes<HTMLElement> {}

export default function Header({children, className, ...rest}: HeaderPropsInterface) {
    return (
        <Styled.StyledDiv className={className}>
          <Logoimg />
          {children}
        </Styled.StyledDiv>
    )
}