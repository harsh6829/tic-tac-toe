import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MonthAndYear = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>
        {/* {months[activeDate.getMonth()]} {activeDate.getFullYear()} */}
      </Text>
    </View>
  );
};

export default MonthAndYear;

const styles = StyleSheet.create({
  font: {
    fontSize: 23,
  },
  container: {
    alignItems: 'center',
  },
});
