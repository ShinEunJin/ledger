import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Keyboard,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import dayjs from 'dayjs';

import {insert} from '../../../redux/list';

const Insert = ({day}) => {
  const dispatch = useDispatch();
  const storeList = useSelector(({list}) => list);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const id = dayjs().format('YYYYMMDDHHmmSSS');

  const onSubmitData = () => {
    if (title.replace(/ /g, '') === '')
      return Alert.alert('제목 입력란 적어주세요');
    else if (amount.replace(/ /g, '') === '')
      return Alert.alert('금액 입력란 적어주세요');
    let payload = {
      [day]: {
        id,
        title,
        amount: Number(amount),
      },
    };
    dispatch(insert(payload));
    setTitle('');
    setAmount('');
  };

  const onCheck = async () => {
    console.log('storeList', storeList);
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <TextInput
        style={styles.inputStyle}
        placeholder="제목"
        placeholderTextColor="#D5D5D5"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="금액"
        placeholderTextColor="#D5D5D5"
        keyboardType="number-pad"
        value={amount}
        onChangeText={setAmount}
      />
      <View style={{width: '70%'}}>
        <Pressable style={styles.submitBoxStyle} onPress={onSubmitData}>
          <Text style={{color: '#EADEDE'}}>확인</Text>
        </Pressable>
      </View>
      {/* <View style={{width: '70%'}}>
        <Pressable style={styles.submitBoxStyle} onPress={onCheck}>
          <Text style={{color: '#EADEDE'}}>체크</Text>
        </Pressable>
      </View> */}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    alignItems: 'center',
    marginBottom: 40,
  },
  inputStyle: {
    backgroundColor: '#fff',
    width: '70%',
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    shadowColor: '#99A799',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 3,
    color: '#000',
    marginBottom: 10,
  },
  submitBoxStyle: {
    backgroundColor: '#2C272E',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    shadowColor: '#EADEDE',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 3,
    marginBottom: 10,
  },
});

export default Insert;
