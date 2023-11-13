import { FieldHookConfig } from "formik";
import {
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

export type IInputProps = ChakraInputProps & FieldHookConfig<"input">;
