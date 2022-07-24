import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = () => {
  const { signup } = useContext(AuthContext);

  return (
    <AuthForm
      title="Sign Up for Tracker"
      onSubmit={signup}
      submitButtonTitle="Sign Up"
      routeName="Signin"
      linkTitle="Already have an account? Sign in instead"
    />
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({});

export default SignupScreen;
