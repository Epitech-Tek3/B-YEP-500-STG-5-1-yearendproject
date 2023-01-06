import React, {useState} from 'react';
import {View, Text, ScrollView, Image, Switch, Pressable} from 'react-native';
import BackButton from '../BackButton';
import {theme} from '../../core/theme';

const DiscordReaction = ({navigation}) => {

  return (
    <ScrollView>
      <View style={theme.back}>
        <BackButton goBack={navigation.goBack} />
      </View>
      <View style={theme.center}>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <Image
            source={require('../../assets/discord.png')}
            mode="contained"
            style={{width: 80, height: 80}}
          />
          <Text>Reactions</Text>
        </View>
        <Pressable style={theme.box} onPress={() => {navigation.navigate('Functions')}}>
          <Text style={theme.textFeatures}>
            Send message discord{'\n'}The bot send a message
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default DiscordReaction;
