import { Button, Form as BootstrapForm } from "react-bootstrap";
import type { AppDispatch } from "../../redux/app/store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import { loginValidationSchema } from "../../schemas/loginValidationSchemas";
import { login } from "../../redux/features/authSlice";

interface LoginFormValues {
  email: string;
  password: string;
  keepSignedIn: boolean;
}

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
    keepSignedIn: false,
  };

  const handleSubmit = (values: LoginFormValues) => {
    dispatch(login({ userDetails: values }));
    navigate("/home");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <FormikForm>
          <BootstrapForm.Group className="mb-3" controlId="formBasicEmail">
            <Field
              name="email"
              type="email"
              placeholder="Enter email"
              as={BootstrapForm.Control}
              isInvalid={touched.email && !!errors.email}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </BootstrapForm.Group>

          <BootstrapForm.Group className="mb-3" controlId="formBasicPassword">
            <Field
              name="password"
              type="password"
              placeholder="Password"
              as={BootstrapForm.Control}
              isInvalid={touched.password && !!errors.password}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
          </BootstrapForm.Group>

          <BootstrapForm.Group className="mb-3" controlId="formBasicCheckbox">
            <Field
              name="keepSignedIn"
              type="checkbox"
              label="Keep me signed in"
              as={BootstrapForm.Check}
            />
          </BootstrapForm.Group>

          <Button
            variant="dark"
            type="submit"
            className="w-100 border-0 rounded-0"
          >
            Sign In
          </Button>
        </FormikForm>
      )}
    </Formik>
  );
};

export default LoginForm;
