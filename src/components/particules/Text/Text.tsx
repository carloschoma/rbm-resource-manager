import * as Styled from "./Text-style";
import React from 'react'

export type TextProps = {
  tag: any;
  children: string | any[];
  fontSize?: string;
  color?: string;
  weight?: string;
};

export default function Text(props: TextProps) {
  return (
    <Styled.StyledText as={props.tag} fontSize={props.fontSize} color={props.color} weight={props.weight} >{props.children}</Styled.StyledText>
  )
}
