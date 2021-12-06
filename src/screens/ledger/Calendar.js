import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Calendar as Calendars, LocaleConfig} from 'react-native-calendars';
import dayjs from 'dayjs';

import {G_backgroundColor} from '../../global';

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
  const [selectedDay, setSelectedDay] = useState('');

  const onSelectDay = day => {
    setSelectedDay(selectedDay === day ? '' : day);
  };

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
        onDayPress={day => onSelectDay(day.dateString)}
        monthFormat={'yyyy년 MMM'}
        markingType={'multi-dot'}
        markedDates={{
          [selectedDay]: {selected: true},
        }}
      />
      <Text style={{color: 'black'}}>
        {selectedDay === '' ? dayjs().format('YYYY-MM-DD') : selectedDay}
      </Text>
    </View>
  );
};

export default Calendar;
