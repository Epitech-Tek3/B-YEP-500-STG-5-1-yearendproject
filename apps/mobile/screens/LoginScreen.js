import React, {useEffect, useState} from 'react';
import {TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from './TextInput';
import BackButton from './BackButton';
import {theme} from '../core/theme';
import BtnLoginGl from '../components/BtnLoginGl';
import TabNavigator from '../navigator/TabNavigator';


export default function LoginScreen({navigation}) {
  const [password, setPassword] = useState({value:'', error:''});
  const [email, setEmail] = useState({value:'', error:''});
  const [error, setError] = useState();

  const onSubmit = async (data) => {
    const res = await (
      await fetch('http://localhost:8080/auth/signin', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({email: email.value, password: password.value}),
        credentials: "include"
      })
    ).json();

    if (res?.error) return setError(res.error);
    localStorage.setItem("user", res);
    navigation.navigate("TabNavigator");
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <BtnLoginGl
        icon={() => (
          <Image
            source={require('../assets/google-logo.png')}
            mode="contained"
            style={{width: 24, height: 24}}
          />
        )}
        onPress={() => {
          navigation.navigate('LoginGoogle');
        }}>
        Se connecter à Google
      </BtnLoginGl>
      <Header>Ou</Header>
      <TextInput
        label="Email"
        type={"email"}
        onChangeText={text => setEmail({value: text, error: ''})}
      />
      <TextInput
        label="Password"
        type={"password"}
        onChangeText={text => setPassword({value: text, error: ''})}
        returnKeyType="done"
        secureTextEntry
      />
      <TextInput label="IP" />
      {error ? <Text style={{color: 'red'}}>{error}</Text> : <></>}
      <Button
        type={"submit"}
        mode="contained"
        onPress={onSubmit}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  image: {
    height: 24,
    width: 24,
  },
});
