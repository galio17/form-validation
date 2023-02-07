import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Typography } from "@mui/material";

import Input from "./Input";
import { FormFields } from "./interfaces";
import { fieldsValidator } from "../validators";

const Form = () => {
  const methods = useForm<FormFields>({
    resolver: yupResolver(fieldsValidator),
  });
  const onSubmit = methods.handleSubmit(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    }
  );

  return (
    <>
      <Typography textAlign="center" variant="h4" component="h2">
        Cadastro
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <Box display="flex" flexDirection="column" gap={1}>
            <Input name="name" label="Nome" />
            <Input name="address" label="Endereço" />
            <Input name="phone" label="Telefone" type="tel" />
            <Input name="email" label="Email" />
            <Input
              name="dateOfBirth"
              label="Data de Nascimento"
              type="date"
              options={{ valueAsDate: true }}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </FormProvider>
    </>
  );
};

export default Form;
