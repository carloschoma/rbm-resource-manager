import * as Styled from "./Text-style";
import React from 'react'

export type TextProps = {
  tag: any;
  children: string | any[];
  fontSize?: string;
  color?: string;
  weight?: string;
  width?: string;
  height?: string;
  lineHeight?: string;
  padding?: string;
  margin?: string;

};

export default function Text(props: TextProps) {
  return (
    <Styled.StyledText 
    as={props.tag} 
    fontSize={props.fontSize} 
    color={props.color} 
    weight={props.weight} 
    width={props.width}
    height={props.height}
    lineHeight={props.lineHeight}
    padding={props.padding}
    margin={props.margin}>{props.children}</Styled.StyledText>

  )
}
 