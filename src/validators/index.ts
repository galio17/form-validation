import "yup-phone";

import * as yup from "yup";
import { FormFields } from "../Form/interfaces";

export const fieldsValidator: yup.SchemaOf<FormFields> = yup.object({
  name: yup.string().required("Campo obrigatório"),
  address: yup.string().required("Campo obrigatório"),
  phone: yup
    .string()
    .phone("BR", true, "Deve ser um número válido")
    .required("Campo obrigatório"),
  email: yup
    .string()
    .email("Deve ser um email válido")
    .required("Campo obrigatório"),
  dateOfBirth: yup
    .date()
    .required("Campo obrigatório")
    .typeError("Deve ser uma data válida"),
});
