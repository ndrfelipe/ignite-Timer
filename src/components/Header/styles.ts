import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav{
        display: flex;
        gap: 0.5rem;


        a {
            width: 3rem;
            height: 2.2rem;

            display: flex;
            justify-content: center;
            flex-direction: center;

            color: ${props => props.theme["gray-100"]};
            
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;

            &:hover{
            border-bottom: 3px solid ${props => props.theme["green-500"]};
            }
            &.active {
                color: ${props => props.theme["green-500"]};
            }
    
        }

       
    }

`;