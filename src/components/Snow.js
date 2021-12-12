import {useFocusEffect} from '@react-navigation/core';
import React, {useRef, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';

const Snow = () => {
  const snowAnim = useRef(new Animated.Value(0)).current;

  const snowing = () => {
    Animated.timing(snowAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  useFocusEffect(
    useCallback(() => {
      snowing();
    }, []),
  );

  return (
    <View>
      <Animated.View style={[styles.snowEffect, {opacity: snowAnim}]}>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: '#000',
          }}></View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  snowEffect: {
    idth: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#000',
  },
});

export default Snow;
