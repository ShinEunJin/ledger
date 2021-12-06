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
    console.log(day);
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
      <View style={styles.infoContainer}>
        <Text style={styles.titleStyle}>
          {selectedDay === ''
            ? dayjs().format('YYYY년 MM월 DD일')
            : selectedDay.replace(/\-/, '년 ').replace(/\-/, '월 ')}
          일
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
    paddingVertical: 20,
    width: '80%',
    marginTop: 30,
    marginHorizontal: '10%',
  },
  titleStyle: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Calendar;
