import React from 'react'
import * as Styled from "./List-style";

export type ListProps = {
    children: string | any[];
    fontSize?: string;
    color?: string;
    weight?: string;
    width?: string;
    img?: string;
};

export default function List(props: ListProps){
    return (
        // <FontAwesomeIcon icon="fa-regular fa-rocket" />
        <Styled.StyledList 
        fontSize={props.fontSize} 
        color={props.color} 
        weight={props.weight} 
        width={props.width}
        img={'<FontAwesomeIcon icon="fa-regular fa-rocket" />'}>{props.children}</Styled.StyledList>
    );
}