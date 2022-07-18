import { ButtonComponent } from "./styles";

export type ButtonProps = { 
  title: string
  width?: number
  height?: number
  color?: string
}
export const Button = ({title,width, height, color}:ButtonProps) => (
  
    <ButtonComponent width={width} height={height} color={color} >{title}</ButtonComponent>
  
)
 