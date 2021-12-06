import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Calendar from './Calendar';

import {G_backgroundColor} from '../../global';

const Ledger = () => {
  return (
    <View style={styles.container}>
      <Calendar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: G_backgroundColor,
  },
  titleStyle: {
    color: '#000',
  },
});

export default Ledger;
