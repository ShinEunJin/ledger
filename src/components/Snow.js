import React, {useCallback, useState, useEffect} from 'react';
import {View, Dimensions} from 'react-native';
import SnowAnim from './SnowAnim';

const Snow = () => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;

  const [arr, setArr] = useState([]);

  // const startAnim = useCallback(() => {
  //   let optimizing = true;
  //   let array = [];
  //   for (let i = 0; i < 120; i++) {
  //     let temp = {
  //       px: Math.floor(Math.random() * 100) - 50,
  //       py: screenHeight,
  //       time: Math.floor(Math.random() * 8000) + 10000,
  //       positionLeft: Math.floor(Math.random() * screenWidth),
  //       delayTime: Math.floor(Math.random() * 10000),
  //       snowWidth: Math.floor(Math.random() * 4) + 4,
  //     };
  //     array.push(temp);
  //   }
  //   if (optimizing) {
  //     setArr(array);
  //   }
  // }, []);

  useEffect(() => {
    let optimizing = true;
    let array = [];
    for (let i = 0; i < 120; i++) {
      let temp = {
        px: Math.floor(Math.random() * 100) - 50,
        py: screenHeight,
        time: Math.floor(Math.random() * 8000) + 10000,
        positionLeft: Math.floor(Math.random() * screenWidth),
        delayTime: Math.floor(Math.random() * 10000),
        snowWidth: Math.floor(Math.random() * 4) + 4,
      };
      array.push(temp);
    }
    if (optimizing) setArr(array);
    return () => {
      optimizing = false;
    };
  }, []);

  return (
    <View>
      {arr &&
        arr.length > 0 &&
        arr.map((item, index) => <SnowAnim key={index} {...item} />)}
    </View>
  );
};

export default React.memo(Snow);
