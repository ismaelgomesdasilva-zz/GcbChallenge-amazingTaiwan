import { ButtonComponent } from "./styles";

type ButtonProps = { 
  title: string
}
export const Button = ({title }:ButtonProps) => (
  
    <ButtonComponent>{title}</ButtonComponent>
  
)
 