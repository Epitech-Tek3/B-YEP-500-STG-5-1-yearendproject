import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, Switch, Pressable} from 'react-native';
import BackButton from '../BackButton';
import {theme} from '../../core/theme';

const GithubFeatures = ({navigation}) => {
  return (
    <ScrollView>
      <View style={theme.back}>
        <BackButton goBack={navigation.goBack} />
      </View>
      <View style={theme.center}>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <Image
            source={require('../../assets/github.png')}
            mode="contained"
            style={{width: 80, height: 80}}
          />
          <Text>Actions</Text>
        </View>
        <Pressable style={theme.box} onPress={() => {navigation.navigate('Reaction')}}>
          <Text style={theme.textFeatures}>
            Commit github{'\n'}The user push into her branch
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default GithubFeatures;
