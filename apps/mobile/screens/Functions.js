import React from 'react';
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

const Functions = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.center}>
        <Pressable
          style={[styles.box, styles.shadowProp]}
          onPress={() => navigation.navigate('GoogleFeatures')}>
          <View style={[styles.contents]}>
            <Image
              source={require('../assets/google-logo.png')}
              mode="contained"
              style={{width: 50, height: 50}}
            />
            <Text style={styles.text}>
              Access to Google features
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.box, styles.shadowProp]}
          onPress={() => navigation.navigate('SpotifyFeatures')}>
          <View style={[styles.contents]}>
            <Image
              source={require('../assets/spotify.png')}
              mode="contained"
              style={{width: 50, height: 50}}
            />
            <Text style={styles.text}>
              Access to Spotify features
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.box, styles.shadowProp]}
          onPress={() => navigation.navigate('TwitchFeatures')}>
          <View style={[styles.contents]}>
            <Image
              source={require('../assets/twitch.png')}
              mode="contained"
              style={{width: 50, height: 50}}
            />
            <Text style={styles.text}>
              Access to Twitch features
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.box, styles.shadowProp]}
          onPress={() => navigation.navigate('DiscordFeatures')}>
          <View style={[styles.contents]}>
            <Image
              source={require('../assets/discord.png')}
              mode="contained"
              style={{width: 50, height: 50}}
            />
            <Text style={styles.text}>
              Access to Discord features
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.box, styles.shadowProp]}
          onPress={() => navigation.navigate('GithubFeatures')}>
          <View style={[styles.contents]}>
            <Image
              source={require('../assets/github.png')}
              mode="contained"
              style={{width: 50, height: 50}}
            />
            <Text style={styles.text}>
              Access to Github features
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
  text: {
    marginTop: 40,
    fontSize: 17,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
});

export default Functions;
