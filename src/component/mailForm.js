import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationSchema } from "./utils";

const onSubmit = (values) => {
  console.log("values ===========>", values);
  // sendEmail({
  //   name: values.name,
  //   email: values.email,
  //   service: values.service, //not working
  //   additionalRequest: values.additionalRequest,
  // });
};

export default function SubmitForm(props) {
  const {
    initialValues = {},
    labels = {},
    placeholders = {},
    sendFrom = "",
  } = props;

  const { name = "", email = "", subject = "", message = "" } = initialValues;

  const {
    name: unp = "",
    email: uep = "",
    Subject: usbp = "",
    message: ump = "",
  } = placeholders;

  const {
    name: unl = "User Name",
    email: uel = "Email",
    Subject: usbl = "Subject",
    message: uml = "Message",
  } = labels;

  return (
    <Formik
      initialValues={{
        name,
        email,
        subject,
        message,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit(values)}
    >
      <Form className="col">
        <div style={{ padding: "10px" }}>
          <label for="floatingInput"> {unl} </label>
          <Field
            aria-describedby="emailHelp"
            className="form-control"
            id="inputText"
            name="name"
            placeholder={`${unp}`}
            style={{ marginBottom: "10px" }}
            type="text"
          />
          <p className="text-danger">
            <ErrorMessage name="name" />
          </p>
          <label for="floatingInput">{uel}</label>
          <Field
            aria-describedby="emailHelp"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            placeholder={`${uep}`}
            style={{ marginBottom: "10px" }}
            type="email"
          />
          <p className="text-danger">
            <ErrorMessage name="email" />
          </p>
          <label for="floatingInput"> {usbl} </label>
          <Field
            aria-describedby="emailHelp"
            className="form-control"
            id="exampleInputEmail1"
            name="subject"
            placeholder={`${usbp}`}
            style={{ marginBottom: "10px" }}
            type="text"
          />
          <p className="text-danger">
            <ErrorMessage name="subject" />
          </p>
          <label for="floatingInput"> {uml} </label>
          <Field
            className="form-control"
            id="exampleFormControlTextarea1"
            name="message"
            placeholder={`${ump}`}
            rows={3}
          />
          <p className="text-danger">
            <ErrorMessage name="message" />
          </p>
        </div>
        <button
          className="btn col-2 btn-info"
          style={{
            marginLeft: "10px",
            marginBottom: "10px",
          }}
          type="submit"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
}
