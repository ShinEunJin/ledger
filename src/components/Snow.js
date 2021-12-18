import React, {useState, useEffect} from 'react';
import {View, Dimensions} from 'react-native';
import SnowAnim from './SnowAnim';

const Snow = () => {
  const screenWidth = Dimensions.get('screen').width;

  const [arr, setArr] = useState([]);
  useEffect(() => {
    let array = [];
    for (let i = 0; i < 100; i++) {
      let temp = {
        px: Math.floor(Math.random() * 100),
        py: 1200,
        time: Math.floor(Math.random() * 8000) + 10000,
        positionLeft: Math.floor(Math.random() * screenWidth),
        delayTime: Math.floor(Math.random() * 10000),
        snowWidth: Math.floor(Math.random() * 4) + 4,
      };
      array.push(temp);
    }
    setArr(array);
  }, []);

  return (
    <View>
      {arr &&
        arr.length > 0 &&
        arr.map((item, index) => <SnowAnim key={index} {...item} />)}
    </View>
  );
};

export default Snow;
