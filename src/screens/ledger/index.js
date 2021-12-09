import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import dayjs from 'dayjs';

import Calendar from '../../components/Calendar';
import {G_backgroundColor} from '../../global';
import {setDay} from '../../redux/calendar';

const Ledger = () => {
  const dispatch = useDispatch();
  const {day} = useSelector(state => state.calendar, shallowEqual);

  useEffect(() => {
    dispatch(setDay(dayjs().format('YYYY-MM-DD')));
  }, []);

  return (
    <View style={styles.container}>
      <Calendar />
      <View style={styles.dayBoxStyle}>
        <Text style={styles.dayTextStyle}>{day}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: G_backgroundColor,
  },
  titleStyle: {
    color: '#000',
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
