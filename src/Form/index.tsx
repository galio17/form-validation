import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "./Input";
import { FormFields } from "./interfaces";
import { fieldsValidator } from "../validators";
import { Button } from "@mui/material";

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
    <div>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <Input name="name" label="Nome" />
          <Input name="address" label="Endereço" />
          <Input name="phone" label="Telefone" type="number" />
          <Input name="email" label="Email" />
          <Input
            name="dateOfBirth"
            label="Data de Nascimento"
            type="date"
            options={{ valueAsDate: true }}
          />
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
