import React, {useState, useEffect} from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {add, reset} from '../../redux/calculate';
import {insert} from '../../redux/list';

const Main = () => {
  const calculate = useSelector(state => state.calculate);
  const list = useSelector(state => state.list);

  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [ledger, setLedger] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getStorage();
  }, []);

  const check = () => {
    console.log({
      list,
    });
  };

  const setStorage = async () => {
    try {
      let value = {id: list.length + 1, name, amount: Number(amount)};
      await AsyncStorage.setItem('ledger', JSON.stringify([...ledger, value]));
      setLedger([...ledger, value]);
    } catch (error) {
      console.log(error);
    }
  };

  const getStorage = async () => {
    try {
      let value = await AsyncStorage.getItem('ledger');
      setLedger(JSON.parse(value));
      if (value !== null) {
        console.log('getStorage ledger', JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onAddAmount = async () => {
    if (amount.replace(/ /g, '') === '') {
      return Alert.alert('', '가격 입력란 적어라');
    } else if (name.replace(/ /g, '') === '') {
      return Alert.alert('', '제목 입력란 적어라');
    }
    // const { data } = await axios.post("https://shin.loca.lt/api/ledger", { user: "shin-tester3", list: { name: "test", amount: Number(amount) } })
    dispatch(insert({id: list.length + 1, name, amount}));
    setAmount('');
    setName('');
    setStorage();
  };

  const onResetAmount = () => {
    dispatch(reset());
  };

  const renderItem = ({item}) => {
    return (
      <View style={{marginBottom: 10}}>
        <Text>hihi</Text>
        <Text style={{color: 'black'}}>{item.name}</Text>
        <Text style={{color: 'black'}}>{item.amount}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleStyle}>이번 달 지출은?</Text>
      </View>
      <View>
        <Text style={styles.amountStyle}>{calculate.amount}</Text>
      </View>
      <TextInput
        style={styles.inputStyle}
        keyboardType="numeric"
        onChangeText={setAmount}
        value={amount}
        placeholder="가격"
        placeholderTextColor="black"
      />
      <TextInput
        style={styles.inputStyle}
        onChangeText={setName}
        value={name}
        placeholder="제목"
        placeholderTextColor="black"
      />
      <Pressable style={styles.inputBtn} onPress={onAddAmount}>
        <Text style={styles.inputBtnText}>추가</Text>
      </Pressable>
      <Pressable style={styles.inputBtn} onPress={onResetAmount}>
        <Text style={styles.inputBtnText}>초기화</Text>
      </Pressable>
      <Pressable style={styles.inputBtn} onPress={check}>
        <Text style={styles.inputBtnText}>체크</Text>
      </Pressable>
      <View style={{borderColor: 'yellow', borderWidth: 3, height: 300}}>
        {ledger && ledger.length > 0 && (
          <FlatList
            data={ledger}
            renderItem={renderItem}
            keyExtractor={(_, idx) => idx}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleStyle: {
    color: '#000',
  },
  amountStyle: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#000',
    color: '#000',
  },
  inputBtn: {
    backgroundColor: '#000',
    width: 100,
    alignItems: 'center',
  },
  inputBtnText: {
    color: '#fff',
    padding: 10,
  },
});

export default Main;
