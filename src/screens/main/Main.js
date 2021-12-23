import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Pressable, View, Text, StyleSheet, ImageBackground} from 'react-native';

import {CARD, LEDGER} from '../../navigations/RootNavigation';
import Snow from '../../components/Snow';

const Main = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/img/img2.jpg')}>
      <Snow />
      <View style={styles.container}>
        <Pressable
          style={styles.selectBox}
          onPress={() => navigation.navigate(LEDGER)}>
          <Text style={styles.selectText}>가계부</Text>
        </Pressable>
        <Pressable
          style={styles.selectBox}
          onPress={() => navigation.navigate(CARD)}>
          <Text style={styles.selectText}>테스트</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  selectBox: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#533535',
    width: '80%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  selectText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Main;
