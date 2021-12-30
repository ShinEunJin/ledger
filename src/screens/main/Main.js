import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Pressable, View, Text, StyleSheet, ImageBackground} from 'react-native';

import Snow from '../../components/Snow';

const navigationList = [
  {name: '가계부', nav: 'LEDGER', bgColor: '#F3C892'},
  {name: '헬스', nav: 'HEALTH', bgColor: '#CDDEFF'},
  {name: '소켓', nav: 'SOCKET', bgColor: '#BAABDA'},
];

const Main = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/img/img2.jpg')}>
      <Snow />
      <View style={styles.container}>
        {navigationList.length > 0 &&
          navigationList.map((item, index) => (
            <Pressable
              key={index}
              style={[styles.selectBox, {backgroundColor: item.bgColor}]}
              onPress={() => navigation.navigate(item.nav)}>
              <Text style={styles.selectText}>{item.name}</Text>
            </Pressable>
          ))}
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
