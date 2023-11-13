import { useField } from "formik";

import { ChakraInput } from "./styles";
import { IInputProps } from "./interface";


const Input = ({ name, ...props }: IInputProps) => {
  const [field] = useField(name);
  
  return <ChakraInput {...props} {...field} />;
};

export default Input;