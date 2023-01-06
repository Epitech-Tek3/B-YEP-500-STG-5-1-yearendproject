import React, {useState} from 'react';
import {View, Text, ScrollView, Image, Switch, Pressable} from 'react-native';
import BackButton from '../BackButton';
import {theme} from '../../core/theme';

const SpotifyReaction = ({navigation}) => {
  return (
    <ScrollView>
      <View style={theme.back}>
        <BackButton goBack={navigation.goBack} />
      </View>
      <View style={theme.center}>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <Image
            source={require('../../assets/spotify.png')}
            mode="contained"
            style={{width: 80, height: 80}}
          />
          <Text>Reactions</Text>
        </View>
        <Pressable style={theme.box} onPress={() => {navigation.navigate('Functions')}}>
          <Text style={theme.textFeatures}>
            Skip song Spotify{'\n'}Spotify change current song for the next
          </Text>
        </Pressable>
        <Pressable style={theme.box} onPress={() => {navigation.navigate('Functions')}}>
          <Text style={theme.textFeatures}>
            Follow playlist on spotify{'\n'}The user follow another playlist
          </Text>
        </Pressable>
        <Pressable style={theme.box} onPress={() => {navigation.navigate('Functions')}}>
          <Text style={theme.textFeatures}>
            Delete track spotify{'\n'}The user delete a track to her spotify track
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default SpotifyReaction;
