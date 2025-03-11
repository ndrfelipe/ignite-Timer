import styled, { css } from "styled-components";

export type buttonVariant = 'primary' | 'secundary' | 'danger' | 'success';

interface ButtonContainerProps{
    variant: buttonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secundary: 'orange',
    danger:'red',
    success: 'green'
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 50px;
    margin: 1px;

    ${props => {
        return css`background-color: ${buttonVariants[props.variant]}`
    }
}
`

