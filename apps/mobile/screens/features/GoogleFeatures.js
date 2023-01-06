import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, Switch, Pressable} from 'react-native';
import BackButton from '../BackButton';
import {theme} from '../../core/theme';

const GoogleFeatures = ({navigation}) => {
  return (
    <ScrollView>
      <View style={theme.back}>
        <BackButton goBack={navigation.goBack} />
      </View>
      <View style={theme.center}>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <Image
            source={require('../../assets/youtube.png')}
            mode="contained"
            style={{width: 80, height: 80}}
          />
          <Text>Actions</Text>
        </View>
        <Pressable style={theme.box} onPress={() => {navigation.navigate('Reaction')}}>
          <Text style={theme.textFeatures}>
            Like music on youtube{'\n'}The user like a music or a video on youtube
          </Text>
        </Pressable>
        <Pressable style={theme.box} onPress={() => {navigation.navigate('Reaction')}}>
          <Text style={theme.textFeatures}>
            Youtube subscribtion{'\n'}The user subscribe to an account
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default GoogleFeatures;
