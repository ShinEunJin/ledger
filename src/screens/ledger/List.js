import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {shallowEqual, useSelector} from 'react-redux';

const List = () => {
  const list = useSelector(({list}) => list, shallowEqual);

  const renderItem = ({item}) => {
    return (
      <View style={styles.listBox}>
        <Text style={[styles.listText]}>{item.title}</Text>
        <Text style={[styles.listText]}>{item.amount}</Text>
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
