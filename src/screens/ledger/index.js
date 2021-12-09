import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import dayjs from 'dayjs';

import Calendar from '../../components/Calendar';
import {G_backgroundColor} from '../../global';
import {setDay} from '../../redux/calendar';
import {LEDGER_WRITE} from '../../navigations/RootNavigation';
import storage from '../../storage';

const Ledger = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {day} = useSelector(state => state.calendar, shallowEqual);

  const [sum, setSum] = useState(0);

  const getSum = async () => {
    let result = await storage.getDataByDay(day);
    console.log('test', result);
  };

  useEffect(() => {
    dispatch(setDay(dayjs().format('YYYY-MM-DD')));
  }, []);

  useEffect(() => {
    getSum(day);
  }, [day]);

  return (
    <View style={styles.container}>
      <Calendar />
      <View style={styles.dayBoxStyle}>
        <Text style={styles.dayTextStyle}>{day}</Text>
      </View>
      <Text style={{color: '#000'}}>{sum}</Text>
      <Pressable
        onPress={() => navigation.navigate(LEDGER_WRITE, {day})}
        style={{width: 50, height: 50, backgroundColor: 'gray'}}>
        <Text>작성</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: G_backgroundColor,
  },
  dayBoxStyle: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
    paddingVertical: 20,
    width: '80%',
    marginTop: 30,
    marginHorizontal: '10%',
  },
  dayTextStyle: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Ledger;
