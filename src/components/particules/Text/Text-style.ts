import { TextProps } from 'components/particules/Text/Text';
import styled from "styled-components";

export const StyledText = styled.span<TextProps>`
  font-family: "Poppins";
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  border-radius: 6px;
  width: 410px;
  height: 54px;
  top:  423px;
  left: 857px;
  font-weight: ${(props) => props.weight};
  display: block;
  padding-bottom: 25px;
`;

