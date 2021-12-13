import {useFocusEffect} from '@react-navigation/core';
import React, {useRef, useCallback, useEffect} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

const Snow = () => {
  const snowAnim = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const snowing = () => {
    return Animated.timing(snowAnim, {
      toValue: {x: 20, y: 300},
      duration: 10000,
      useNativeDriver: true,
    });
  };

  useFocusEffect(
    useCallback(() => {
      Animated.loop(snowing()).start();
    }, []),
  );

  return (
    <View>
      <Animated.View
        style={{
          transform: [{translateY: snowAnim.y}, {translateX: snowAnim.x}],
        }}>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: '#fff',
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
