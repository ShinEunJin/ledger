import React, {useCallback, useState} from 'react';
import dayjs from 'dayjs';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector, shallowEqual} from 'react-redux';

import Insert from './Insert';
import List from './List';

const index = ({
  route: {
    params: {day},
  },
}) => {
  return (
    <View>
      <Insert day={day} />
      <View style={styles.titleBox}>
        <Text style={styles.titleStyle}>
          {dayjs(day).format('YYYY년 MM월 DD일')}
        </Text>
      </View>
      <List day={day} />
    </View>
  );
};

const styles = StyleSheet.create({
  titleBox: {
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    color: '#fff',
    backgroundColor: '#5584AC',
    padding: 10,
    borderRadius: 10,
    fontWeight: 'bold',
  },
});

export default index;
