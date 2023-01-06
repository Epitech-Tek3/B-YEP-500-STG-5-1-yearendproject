import React from 'react';
import {StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

export default function SuccessConnection() {
  return (
    <LottieView
      style={styles.image}
      source={require('../anim/success.json')}
      autoPlay
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
});
