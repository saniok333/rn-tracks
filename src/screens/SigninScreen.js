import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SigninScreen = () => {
  const { signin } = useContext(AuthContext);

  return (
    <AuthForm
      title="Sign In to Your Account"
      onSubmit={signin}
      submitButtonTitle="Sign In"
      routeName="Signup"
      linkTitle="Don't have an account yet? Sign up instead"
    />
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({});

export default SigninScreen;
