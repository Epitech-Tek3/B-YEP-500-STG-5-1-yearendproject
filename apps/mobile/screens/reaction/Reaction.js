import React, {useEffect, useState} from 'react';
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {theme} from "../../core/theme";
import BackButton from "../BackButton";

const Reaction = ({navigation}) => {
  return (
    <ScrollView>
      <View style={theme.back}>
        <BackButton goBack={navigation.goBack} />
      </View>
      <View style={styles.center}>
        <Pressable
          style={[styles.box, styles.shadowProp]}
          onPress={() => {
            navigation.navigate('GoogleReaction');
          }}>
          <View style={[styles.contents]}>
            <Image
              source={require('../../assets/google-logo.png')}
              mode="contained"
              style={{width: 50, height: 50}}
            />
            <Text style={styles.button}>
              Choose Reaction Google
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.box, styles.shadowProp]}
          onPress={() => {
            navigation.navigate('MicrosoftReaction');
          }}>
          <View style={[styles.contents]}>
            <Image
              source={require('../../assets/microsoft.png')}
              mode="contained"
              style={{width: 150, height: 50}}
            />
            <Text style={styles.button}>
              Choose reaction Microsoft
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.box, styles.shadowProp]}
          onPress={() => {
            navigation.navigate('DiscordReaction');
          }}>
          <View style={[styles.contents]}>
            <Image
              source={require('../../assets/discord.png')}
              mode="contained"
              style={{width: 50, height: 50}}
            />
            <Text style={styles.button}>
              Choose reaction Discord
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.box, styles.shadowProp]}
          onPress={() => {
            navigation.navigate('SpotifyReaction');
          }}>
          <View style={[styles.contents]}>
            <Image
              source={require('../../assets/spotify.png')}
              mode="contained"
              style={{width: 50, height: 50}}
            />
            <Text style={styles.button}>
              Choose reaction Spotify
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

export default Reaction;
