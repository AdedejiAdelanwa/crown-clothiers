import { useState } from "react";

import {
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

import Button from "../button/button";
import FormInput from "../form-input/form-input";
import "./sign-in-form.scss";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopUp();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetForm();
    } catch (error) {
      if (error) {
        console.log("signing user in with error:", error.code);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already a User?</h2>
      <span>Sign in</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          autoComplete="New password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
