import React, {useCallback, useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/core';
import dayjs from 'dayjs';
import Icon_AntDesign from 'react-native-vector-icons/AntDesign';
import Icon_SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

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
  const [totalSum, setTotalSum] = useState(0);

  const getSum = async () => {
    let data = await storage.getDataByDay(day);
    setSum(data);
  };

  const testFn = async date => {
    let total = 0;
    for (let i = 1; i <= 40; i++) {
      let temp = await storage.getDataByDay(
        `2021-${date}-${i < 10 ? '0' + i : i}`,
      );
      total += Number(temp);
    }
    setTotalSum(total);
  };

  useEffect(() => {
    dispatch(setDay(dayjs().format('YYYY-MM-DD')));
  }, []);

  useFocusEffect(
    useCallback(() => {
      getSum(day);
      testFn(day.substring(5, 7));
    }, [day]),
  );

  return (
    <View style={styles.container}>
      <Calendar />
      <View style={styles.dayBoxStyle}>
        <Icon_AntDesign
          size={25}
          name="calendar"
          color="black"
          style={{marginRight: 10}}
        />
        <Text style={styles.dayTextStyle}>{day}</Text>
      </View>
      <Text style={{color: '#000'}}>{sum ? sum : 0}</Text>
      <Text style={{color: '#000'}}>{totalSum ? totalSum : 0}</Text>
      <Pressable
        onPress={() => navigation.navigate(LEDGER_WRITE, {day})}
        style={{width: 50, height: 50, backgroundColor: 'gray'}}>
        <Icon_SimpleLineIcons name="note" color="black" />
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
    flexDirection: 'row',
    justifyContent: 'center',
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
