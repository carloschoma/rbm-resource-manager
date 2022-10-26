import * as Styled from "./Text-style";
import React from 'react'

type TextProps = {
  tag: any;
  children: string
};

export default function Text(props: TextProps) {
  return (
    <Styled.StyledText as={props.tag}>{props.children}</Styled.StyledText>
  )
}

