import { TextProps } from 'components/particules/Text/Text';
import styled from "styled-components";

export const StyledText = styled.span<TextProps>`
  font-family: "Poppins";
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  border-radius: 6px;
  width: ${(props) => props.width}px;
  font-weight: ${(props) => props.weight};
`;
