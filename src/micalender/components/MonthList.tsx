import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MonthList = () => {
  let months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const renderItem = ({item}: {item: string}) => {
    return (
      <View style={styles.month}>
        <Text>{item.substring(0, 3)}</Text>
      </View>
    );
  };
  return (
    <FlatList
      renderItem={renderItem}
      data={months}
      horizontal
      scrollEnabled={false}
    />
  );
};

export default MonthList;

const styles = StyleSheet.create({
  month: {
    // flex: 1,
    margin: 4,
  },
});
