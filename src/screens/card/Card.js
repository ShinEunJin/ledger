import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';

const Card = () => {
  useFocusEffect(useCallback(() => {}, []));

  return (
    <View>
      <Text>card</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
