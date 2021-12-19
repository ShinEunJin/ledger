import {useFocusEffect} from '@react-navigation/core';
import React, {useRef, useCallback, useEffect} from 'react';
import {View, Animated} from 'react-native';

const SnowAnim = ({px, py, time, positionLeft, delayTime, snowWidth}) => {
  const snowAnim = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const snowing = () => {
    return Animated.sequence([
      Animated.delay(delayTime),
      Animated.timing(snowAnim, {
        toValue: {x: px, y: py},
        duration: time,
        useNativeDriver: true,
      }),
    ]);
  };

  useFocusEffect(
    useCallback(() => {
      Animated.loop(snowing()).start();
    }, [snowAnim]),
  );

  return (
    <View>
      <Animated.View
        style={{
          transform: [
            {
              translateY: snowAnim.y.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
            {
              translateX: snowAnim.x.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ],
        }}>
        <View
          style={{
            position: 'absolute',
            left: positionLeft,
            top: -50,
            width: snowWidth,
            height: snowWidth,
            borderRadius: snowWidth / 2,
            backgroundColor: '#fff',
          }}></View>
      </Animated.View>
    </View>
  );
};

export default React.memo(SnowAnim);
