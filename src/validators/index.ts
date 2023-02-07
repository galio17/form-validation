import * as yup from "yup";
import { FormFields } from "../Form/interfaces";

export const fieldsValidator: yup.SchemaOf<FormFields> = yup.object({
  name: yup.string().required("Campo obrigatório"),
  address: yup.string().required("Campo obrigatório"),
  phone: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Deve ser um email").required("Campo obrigatório"),
  dateOfBirth: yup.date().required("Campo obrigatório"),
});
