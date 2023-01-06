import React, {useEffect, useState} from 'react';
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

const Services = ({navigation}) => {

  return (
    <ScrollView>
      <View style={styles.center}>
        <Pressable
          style={[styles.box, styles.shadowProp]}
          onPress={() => {
            console.log("USER: ", localStorage.getItem("user"));
          }}>
          <View style={[styles.contents]}>
            <Text style={styles.button}>
              Button Test
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.box, styles.shadowProp]}
          onPress={() => {
            navigation.navigate('LoginServiceGoogle');
          }}>
          <View style={[styles.contents]}>
            <Image
              source={require('../assets/google-logo.png')}
              mode="contained"
              style={{width: 50, height: 50}}
            />
            <Text style={styles.button}>
              Sign in to Google service
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.box, styles.shadowProp]}
          onPress={() => {
            navigation.navigate('LoginService', {services: "twitch"});
          }}>
          <View style={[styles.contents]}>
            <Image
              source={require('../assets/twitch.png')}
              mode="contained"
              style={{width: 50, height: 50}}
            />
            <Text style={styles.button}>
              Sign in to Twitch service
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.box, styles.shadowProp]}
          onPress={() => {
            navigation.navigate('LoginService', {services: "microsoft"});
          }}>
          <View style={[styles.contents]}>
            <Image
              source={require('../assets/microsoft.png')}
              mode="contained"
              style={{width: 150, height: 50}}
            />
            <Text style={styles.button}>
              Sign in to Microsoft service
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.box, styles.shadowProp]}
          onPress={() => {
            navigation.navigate('LoginService', {services: "discord"});
          }}>
          <View style={[styles.contents]}>
            <Image
              source={require('../assets/discord.png')}
              mode="contained"
              style={{width: 50, height: 50}}
            />
            <Text style={styles.button}>
              Sign in to Discord service
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.box, styles.shadowProp]}
          onPress={() => {
            navigation.navigate('LoginService', {services: "github"});
          }}>
          <View style={[styles.contents]}>
            <Image
              source={require('../assets/github.png')}
              mode="contained"
              style={{width: 50, height: 50}}
            />
            <Text style={styles.button}>
              Sign in to Github service
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.box, styles.shadowProp]}
          onPress={() => {
            navigation.navigate('LoginService', {services: "spotify"});
          }}>
          <View style={[styles.contents]}>
            <Image
              source={require('../assets/spotify.png')}
              mode="contained"
              style={{width: 50, height: 50}}
            />
            <Text style={styles.button}>
              Sign in to Spotify service
            </Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    marginTop: 60,
    margin: 20,
  },
  box: {
    alignItems: 'center',
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 4,
    marginVertical: 8,
  },
  contents: {
    margin: 40,
    alignItems: 'center',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  button: {
    marginTop: 40,
    fontSize: 17,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  }
});

export default Services;
