import React, {useState} from 'react';
import {View, Text, ScrollView, Image, Switch, Pressable} from 'react-native';
import BackButton from '../BackButton';
import {theme} from '../../core/theme';

const TwitchFeatures = ({navigation}) => {
  return (
    <ScrollView>
      <View style={theme.back}>
        <BackButton goBack={navigation.goBack} />
      </View>
      <View style={theme.center}>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <Image
            source={require('../../assets/twitch.png')}
            mode="contained"
            style={{width: 80, height: 80}}
          />
          <Text>Actions</Text>
        </View>
        <Pressable style={theme.box} onPress={() => {navigation.navigate('Reaction')}}>
          <Text style={theme.textFeatures}>
            Notification live twitch{'\n'}The user received a notification for a live
          </Text>
        </Pressable>
        <Pressable style={theme.box} onPress={() => {navigation.navigate('Reaction')}}>
          <Text style={theme.textFeatures}>
            Follow Twitch{'\n'}The user subscribe another twitch account
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default TwitchFeatures;
