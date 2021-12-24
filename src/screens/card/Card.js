import React, {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';

const Card = () => {
  const getData = async () => {
    const {data} = await axios.post(
      'https://developers.nonghyup.com/InquireCreditCardAuthorizationHistory.nh',
      {
        Header: {
          ApiNm: 'InquireCreditCardAuthorizationHistory',
          Tsymd: '20211224',
          Trtm: '000755',
          Iscd: '001387',
          FintechApsno: '001',
          ApiSvcCd: 'DrawingTransferA',
          IsTuno: '3020000006043',
          AccessToken:
            'b1c647e9302a0dcff39a0dcd0089cdabca6dd6973dd6f5828d1aa6dbb12c6707',
        },
        FinCard: '9411123456782718',
        IousDsnc: '1',
        Insymd: '20191105',
        Ineymd: '20191109',
        PageNo: '1',
        Dmcnt: '15',
      },
    );
    console.log({data});
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );

  return (
    <View>
      <Text>card</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
