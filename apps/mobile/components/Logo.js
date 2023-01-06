import React from 'react';
import {StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

export default function Logo() {
  return (
    <LottieView
      style={styles.image}
      source={require('../anim/sunshine.json')}
      autoPlay
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
});
