import {ButtonContainer, buttonVariant} from './Button.styles';

interface buttonProps{
    variant?: buttonVariant;
}

export function Button({ variant = 'primary'}:buttonProps){
    return <ButtonContainer variant={variant }>Enviar</ButtonContainer>
}