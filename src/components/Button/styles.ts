import styled, { ThemeContext, ThemeProvider } from 'styled-components'
import { theme } from '../../utils/styles/theme'


type ButtonComponentProps = {
    width?: number,
    height?: number,
    color: string,
}
export const ButtonComponent = styled.button<ButtonComponentProps>`
width: ${props => props.width ? props.width: 7}rem;
height: ${props => props.height ? props.height:2.6}rem;
background: ${props=> props.color ? props.color: theme.color.orange };
border-radius: 3rem;
border: none;
color: ${theme.color.white};
font-weight: 700;
font-size: 1rem;
`