import React from "react";
import { Form, Field } from "formik";

const TheForm = ({ errors, touched, values }) => {
  return (
    <Form>
      <Field
        component="input"
        type="text"
        name="username"
        placeholder="Username"
      />
      <Field
        component="input"
        type="text"
        name="password"
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default TheForm;
