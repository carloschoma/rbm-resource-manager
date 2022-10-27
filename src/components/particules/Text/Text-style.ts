import { TextProps } from 'components/particules/Text/Text';
import styled from "styled-components";

export const StyledText = styled.span<TextProps>`
  font-family: "Poppins";
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`;
