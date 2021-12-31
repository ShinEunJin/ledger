import {useFocusEffect} from '@react-navigation/native';
import React, {useState, useCallback, useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const index = () => {
  const [value, setValue] = useState();
  const [text, setText] = useState('');

  const onSubmitHandler = () => {
    $socket.emit('ledger', value);
    setValue('');
  };

  useEffect(() => {
    $socket.on('ledger', msg => {
      setText(msg);
    });
  }, []);

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
      <Text style={{color: 'black'}}>{text}</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
