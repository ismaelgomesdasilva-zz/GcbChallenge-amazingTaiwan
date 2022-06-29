import { ButtonComponent } from "./styles";

export type ButtonProps = { 
  title: string

}

const Button = ({title }:ButtonProps) => (
  
    <ButtonComponent>{title}</ButtonComponent>
  
)
export default Button;