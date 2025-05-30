import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const LoginForm = () => {
  const initialValues = {
    name: "",
    username: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Введите имя"),
    username: Yup.string().required("Введите логин"),
  });

  const handleSubmit = (values) => {
    console.log("Submitted:", values);
  };

  return (
    <div className="login-form">
      <h2 className="login-form__title">Форма входа</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="login-form__form">
          <div className="login-form__field">
            <label htmlFor="name" className="login-form__label">
              Имя:
            </label>
            <Field name="name" type="text" className="login-form__input" />
            <div className="login-form__error">
              <ErrorMessage name="name" />
            </div>
          </div>

          <div className="login-form__field">
            <label htmlFor="username" className="login-form__label">
              Логин:
            </label>
            <Field name="username" type="text" className="login-form__input" />
            <div className="login-form__error">
              <ErrorMessage name="username" />
            </div>
          </div>

          <button type="submit" className="login-form__button">
            Отправить
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
