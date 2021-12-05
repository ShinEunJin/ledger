import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Insert from './Insert';
import List from './List';

const Ledger = () => {
  return (
    <View style={styles.container}>
      <Insert />
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAEDF0',
  },
  titleStyle: {
    color: '#000',
  },
});

export default Ledger;
