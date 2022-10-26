import * as Styled from "./Text-style";
import React from 'react'

type TextProps = {
  tag: any;
  children: string;
  fontSize?: string;
};

export default function Text(props: TextProps) {
  return (
    <Styled.StyledText as={props.tag} fontSize={props.fontSize}>{props.children}</Styled.StyledText>
  )
}

