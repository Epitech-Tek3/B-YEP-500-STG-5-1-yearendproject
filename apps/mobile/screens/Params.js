import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../components/Button';

const Params = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Button
        style={styles.shadowProp}
        mode="outlined"
        onPress={async () => {
          await fetch('http://localhost:8080/auth/logout', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            credentials: "include"
          });
          localStorage.removeItem("user");
          console.log("user in params: ", localStorage.getItem("user"))
          navigation.navigate('StartScreen');
        }}>
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 50,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default Params;
