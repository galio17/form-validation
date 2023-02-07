import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormFields } from "../interfaces";
import { InputProps } from "./interfaces";

const Input = ({ name, ...props }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormFields>();
  const helperText = errors[name]?.message;
  const error = {
    helperText,
    error: !!helperText,
  };

  return (
    <TextField
      {...props}
      {...register(name)}
      {...error}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default Input;
