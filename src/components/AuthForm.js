import { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Input, Text, Button } from 'react-native-elements';
import Spacer from './Spacer';
import NavLink from './NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const AuthForm = ({
  title,
  onSubmit,
  submitButtonTitle,
  routeName,
  linkTitle,
}) => {
  const {
    state: { errorMessage },
    clearErrorMessage,
  } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <Spacer>
        <Text h3>{title}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {!!errorMessage && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
      <Spacer>
        <Button
          title={submitButtonTitle}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
      <NavLink routeName={routeName} linkTitle={linkTitle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
  },
});

export default AuthForm;
