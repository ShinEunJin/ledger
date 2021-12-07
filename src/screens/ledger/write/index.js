import React from 'react';
import dayjs from 'dayjs';
import {StyleSheet, Text, View} from 'react-native';

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
      <Text style={{color: '#000'}}>
        {dayjs(day).format('YYYY년 MM월 DD일')}
      </Text>
      <List day={day} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
