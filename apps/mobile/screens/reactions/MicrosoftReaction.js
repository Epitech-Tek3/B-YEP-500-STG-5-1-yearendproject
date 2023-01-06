import React, {useState} from 'react';
import {View, Text, ScrollView, Image, Switch, Pressable} from 'react-native';
import BackButton from '../BackButton';
import {theme} from '../../core/theme';

const MicrosoftReaction = ({navigation}) => {

  return (
    <ScrollView>
      <View style={theme.back}>
        <BackButton goBack={navigation.goBack} />
      </View>
      <View style={theme.center}>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <Image
            source={require('../../assets/microsoft.png')}
            mode="contained"
            style={{width: 200, height: 80}}
          />
          <Text>Reactions</Text>
        </View>
        <Pressable style={theme.box} onPress={() => {navigation.navigate('Functions')}}>
          <Text style={theme.textFeatures}>
            Add event to Microsoft calendar{'\n'}The user add an event to her microsoft calendar
          </Text>
        </Pressable>
        <Pressable style={theme.box} onPress={() => {navigation.navigate('Functions')}}>
          <Text style={theme.textFeatures}>
            Module_subscribe{'\n'}The user signs up for a unit
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default MicrosoftReaction;
