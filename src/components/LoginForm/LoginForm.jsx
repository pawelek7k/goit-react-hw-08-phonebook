import { useDispatch } from "react-redux";
import { logIn } from "../../stores/auth/operations";
import FormStyles from "../FormComponent/FormStyles";

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",

    justifyContent: "center",
  },
  label: {
    display: "flex",
    flexDirection: "column",
  },
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyles>
      <form onSubmit={handleSubmit} autoComplete="off" style={styles.form}>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">
          <span>Log in</span>
        </button>
      </form>
    </FormStyles>
  );
};
