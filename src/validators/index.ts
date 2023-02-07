import * as yup from "yup";
import { FormFields } from "../Form/interfaces";

export const fieldsValidator: yup.SchemaOf<FormFields> = yup.object({
  name: yup.string().required(),
  address: yup.string().required(),
  phone: yup.number().required(),
  email: yup.string().email().required(),
  dateOfBirth: yup.date().required(),
});
