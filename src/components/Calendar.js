import React from 'react';
import {View} from 'react-native';
import {Calendar as Calendars, LocaleConfig} from 'react-native-calendars';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

import {G_backgroundColor} from '../global';
import {setDay} from '../redux/calendar';
import list from '../redux/list';

LocaleConfig.locales['kr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};

LocaleConfig.defaultLocale = 'kr';

const Calendar = () => {
  const dispatch = useDispatch();
  const {day} = useSelector(({calendar}) => calendar, shallowEqual);
  const list = useSelector(
    ({list}) =>
      list.filter(
        item =>
          String(Object.keys(item)).substring(5, 7) === day.substring(5, 7),
      ),
    shallowEqual,
  );

  let array = [];
  let array2 = [];

  list.filter(item => array.push(Object.keys(item)));

  array = [...new Set(array.map(item => item[0]))];

  for (let i = 0; i < array.length; i++) {
    let temp = new Object();
    temp[array[i]] = {marked: true, dotColor: 'red'};
    array2.push(temp);
  }

  let object = {};
  for (let i = 0; i < array2.length; i++) {
    object = {hi: array2[i]};
  }
  console.log(object);

  return (
    <View>
      <Calendars
        style={{
          elevation: 2,
          backgroundColor: G_backgroundColor,
        }}
        theme={{
          todayTextColor: '#FF9300',
          calendarBackground: G_backgroundColor,
        }}
        onDayPress={day => dispatch(setDay(day.dateString))}
        monthFormat={'yyyy년 MMM'}
        markedDates={{
          [day]: {selected: true},
          ...object,
        }}
      />
    </View>
  );
};

export default Calendar;
