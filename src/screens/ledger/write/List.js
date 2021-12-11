import React, {useEffect} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';

import {remove} from '../../../redux/list';
import storage from '../../../storage';

const List = ({day, updateSum}) => {
  const dispatch = useDispatch();
  const list = useSelector(
    ({list}) => list.filter(item => item[day]),
    shallowEqual,
  );

  const setSumToStorage = async amount => {
    await storage.setSumByDay(day.toString(), amount.toString());
  };

  useEffect(() => {
    let calculateSum = 0;
    list.forEach(item => {
      calculateSum += item[day].amount;
    });
    setSumToStorage(calculateSum);
    updateSum(calculateSum);
  }, [list]);

  const onRemoveItem = id => {
    dispatch(remove(id));
  };

  const renderItem = ({item}) => {
    let filteredItem = item[day];
    return (
      <View style={styles.listBox}>
        <Text style={[styles.listText]}>{filteredItem.title}</Text>
        <Text style={[styles.listText]}>{filteredItem.amount}</Text>
        <Pressable
          style={{padding: 2, backgroundColor: 'gray'}}
          onPress={() => onRemoveItem(filteredItem.id)}>
          <Text>삭제</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item[day].id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '10%',
  },
  listBox: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  listText: {
    color: '#000',
    marginRight: 10,
  },
});

export default List;
