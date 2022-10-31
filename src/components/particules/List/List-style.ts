import { ListProps } from 'components/particules/List/List';
import styled from "styled-components";


export const StyledList = styled.ul<ListProps>`
  font-family: "Poppins";
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  width: ${(props) => props.width}px;
  font-weight: ${(props) => props.weight};

  li::marker{
    content:${(props) => props.img};
  }
`;
