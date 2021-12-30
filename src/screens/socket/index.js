import {useFocusEffect} from '@react-navigation/native';
import React, {useState, useCallback} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {io} from 'socket.io-client';

const index = () => {
  const [value, setValue] = useState();

  const socket = io('https://shin.loca.lt');

  const onSubmitHandler = () => {
    socket.on('connect', () => {
      socket.emit('ledger', value);
    });
    setValue('');
  };

  useFocusEffect(
    useCallback(() => {
      socket.on('connect', () => {
        console.log('socket.id', socket.id);
        console.log('socket.connected', socket.connected);
      });
    }, []),
  );

  return (
    <View>
      <Text>socket</Text>
      <TextInput
        style={{backgroundColor: '#FEECE9', height: 100, color: 'black'}}
        onChangeText={setValue}
        value={value}
      />
      <Pressable
        onPress={onSubmitHandler}
        style={{
          width: 80,
          height: 80,
          backgroundColor: '#CCD1E4',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
          }}>
          submit
        </Text>
      </Pressable>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
