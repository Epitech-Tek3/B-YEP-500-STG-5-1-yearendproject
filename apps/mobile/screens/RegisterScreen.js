import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {WebView} from 'react-native-webview';
import {Text} from 'react-native-paper';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from './TextInput';
import BackButton from './BackButton';
import {theme} from '../core/theme';
import BtnLoginGl from '../components/BtnLoginGl';

export default function RegisterScreen({navigation}) {
  const GOOGLE = "http://localhost:8080/auth/google";
  const [confirmPassword, setConfirmPassword] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [error, setError] = useState();
  const uri = GOOGLE;


  const onSubmit = async (data) => {
    const res = await (
      await fetch(`http://localhost:8080/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({email: email.value, password: password.value, confirmPassword: confirmPassword.value}),
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
        onPress={() => {navigation.navigate('LoginGoogle')}}>
        Se connecter à Google
      </BtnLoginGl>
      <Header>Ou</Header>
      <TextInput
        returnKeyType="next"
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
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
      <TextInput
        label="confirmPassword"
        type={"password"}
        onChangeText={text => setConfirmPassword({value: text, error: ''})}
        returnKeyType="done"
        secureTextEntry
      />
      {error ? <Text style={{color: 'red'}}>{error}</Text> : <></>}
      <Button
        mode="contained"
        onPress={onSubmit}
        style={{marginTop: 24}}>
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
