import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().max(20, "not allowed more than 15 characters"),
  // .required("This field is required"),
  email: Yup.string().email("Invalid email address"),
  // .required("This field is required"),
  subject: Yup.string(),
  // .required("This field is required"),
  message: Yup.string().max(100, "only 100 words are allowed"),
  // .required("This field is required"),
});
