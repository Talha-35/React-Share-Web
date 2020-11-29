import React from "react";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import firebase from "../firebase/firebase.utils";
import * as Yup from "yup";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const signInValidationSchema = Yup.object().shape({
  displayName: Yup.string().required("displayName is empty"),
  email: Yup.string().email("invalid email").required("email is empty"),
  // bu şekilde yanlış yazım hatalrını kontrol ediyoruz
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

const stylesFunc = makeStyles({
  wrapper: {
    marginTop: "10rem",
    height: "calc(100vh - 19.0625rem)",
  },
});

function Signup() {
  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
    },
    validationSchema: signInValidationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // üstteki girilen email şifre vb bilgileri alert yaptırır.

      firebase.register(values.displayName, values.email, values.password);
    },
  });
  const signupStyles = stylesFunc();

  const handleGoogleButtonClick = () => {
    firebase.useGoogleProvider();
  };

  return (
    <Container className={signupStyles.wrapper} maxWidth="sm">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="displayName"
              label="Display Name"
              variant="outlined"
              fullWidth
              // fullwith gridin tamamını kapla demektir
              value={formik.values.displayName}
              onChange={formik.handleChange}
              error={formik.errors.displayName}
              // bu yukardaki cğmle error var ise true dön demektir.
              // bu şekilde yapar isek boş verince inputu kırmızı yapar
              helperText={formik.errors.displayName}
              // bu şekilde input altında yazı çıkar ama küçük yazar
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.errors.email}
              // bu yukardaki cğmle error var ise true dön demektir.
              // bu şekilde yapar isek boş verince inputu kırmızı yapar
              helperText={formik.errors.email}
              // bu şekilde input altında yazı çıkar ama küçük yazar
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.errors.password}
              // bu yukardaki cğmle error var ise true dön demektir.
              // bu şekilde yapar isek boş verince inputu kırmızı yapar
              helperText={formik.errors.password}
              // bu şekilde input altında yazı çıkar ama küçük yazar
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleGoogleButtonClick}
              fullWidth
            >
              SignUp with Google
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Signup;
