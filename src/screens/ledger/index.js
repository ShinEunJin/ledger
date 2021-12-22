import React, {useCallback, useEffect, useState} from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {useFocusEffect, useNavigation} from '@react-navigation/core';
import dayjs from 'dayjs';
import Icon_AntDesign from 'react-native-vector-icons/AntDesign';
import Icon_SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icon_MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Calendar from '../../components/Calendar';
import {setDay} from '../../redux/calendar';
import {LEDGER_WRITE} from '../../navigations/RootNavigation';
import storage from '../../storage';

const Ledger = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {day} = useSelector(state => state.calendar, shallowEqual);

  const [sum, setSum] = useState(0);
  const [totalSum, setTotalSum] = useState(0);
  const [loading, setLoading] = useState(true);

  const getSum = async () => {
    let data = await storage.getDataByDay(day);
    setSum(data);
  };

  const getMonth = async date => {
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
      setLoading(true);
      getSum(day);
      getMonth(day.substring(5, 7));
      if (totalSum) setLoading(false);
    }, [day, totalSum]),
  );

  return (
    <ImageBackground
      source={require('../../assets/img/img4.jpg')}
      style={{flex: 1}}>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator
            size="large"
            style={{marginBottom: Dimensions.get('screen').height * 0.15}}
          />
        </View>
      ) : (
        <>
          <Calendar />
          <View style={styles.infoContainer}>
            <View>
              <View style={{marginBottom: 5}}>
                <View style={[styles.itemBox]}>
                  <Icon_AntDesign
                    size={14}
                    name="calendar"
                    color="#000"
                    style={{marginRight: 6}}
                  />
                  <Text style={[styles.textStyle, {fontSize: 14}]}>
                    {dayjs(day).format('YYYY년 MM월 DD일')}
                  </Text>
                </View>
              </View>
              <View style={styles.listBoxStyle}>
                <View style={[styles.itemBox]}>
                  <Icon_MaterialIcons
                    name="payments"
                    color="#000"
                    size={20}
                    style={{marginRight: 8}}
                  />
                  <Text style={styles.textStyle}>
                    {day.substring(5, 7)}월 달 지출
                  </Text>
                </View>
                <View style={{paddingLeft: 20}}>
                  <Text
                    style={[
                      styles.textStyle,
                      {fontWeight: '600', color: '#F90716'},
                    ]}>
                    {$numeral(totalSum).format('0,0')
                      ? $numeral(totalSum).format('0,0')
                      : 0}
                  </Text>
                </View>
              </View>
              <View style={styles.listBoxStyle}>
                <View style={[styles.itemBox]}>
                  <Icon_MaterialIcons
                    name="payment"
                    color="#000"
                    size={20}
                    style={{marginRight: 8}}
                  />
                  <Text style={styles.textStyle}>당일 지출</Text>
                </View>
                <View style={{paddingLeft: 20}}>
                  <Text
                    style={[
                      styles.textStyle,
                      {
                        fontWeight: '600',
                        color: !sum || sum === '0' ? '#000' : '#F58840',
                      },
                    ]}>
                    {$numeral(sum).format('0,0')
                      ? $numeral(sum).format('0,0')
                      : 0}
                  </Text>
                </View>
              </View>
            </View>
            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 40,
              }}
              onPress={() => navigation.navigate(LEDGER_WRITE, {day})}>
              <Icon_SimpleLineIcons
                size={16}
                style={{marginRight: 4}}
                name="note"
                color="#000"
              />
              <Text style={styles.textStyle}>작성</Text>
            </Pressable>
          </View>
        </>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  listBoxStyle: {
    marginBottom: 15,
  },
  textStyle: {
    color: '#000',
    fontSize: 16,
  },
});

export default Ledger;
