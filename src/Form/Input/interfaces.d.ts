import { TextFieldProps } from "@mui/material/TextField/TextField";
import { RegisterOptions } from "react-hook-form";
import { FormFields } from "../interfaces";

export type InputProps = TextFieldProps & {
  name: keyof FormFields;
  registerOptions?: RegisterOptions;
};
