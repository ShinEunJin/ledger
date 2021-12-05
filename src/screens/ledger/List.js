import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {remove} from '../../redux/list';

const List = () => {
  const dispatch = useDispatch();
  const list = useSelector(({list}) => list, shallowEqual);

  const onRemoveItem = id => {
    dispatch(remove(id));
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.listBox}>
        <Text style={[styles.listText]}>{item.title}</Text>
        <Text style={[styles.listText]}>{item.amount}</Text>
        <Pressable
          style={{padding: 2, backgroundColor: 'gray'}}
          onPress={() => onRemoveItem(item.id)}>
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
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
