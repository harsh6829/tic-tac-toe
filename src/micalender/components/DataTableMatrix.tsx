import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const data = [
  {
    Chirag: [
      {
        '10/11/2022': 40,
      },
      {
        '11/11/2022': 0,
      },
      {
        '12/11/2022': 10,
      },
    ],
  },
  {
    Tushar: [
      {
        '13/11/2022': 20,
      },
      {
        '14/11/2022': 0,
      },
      {
        '15/11/2022': 9,
      },
    ],
  },
  {
    Rohit: [
      {
        '16/11/2022': 3,
      },
      {
        '17/11/2022': 3,
      },
      {
        '18/11/2022': 0,
      },
    ],
  },
  {
    Ankit: [
      {
        '19/11/2022': 4,
      },
      {
        '20/11/2022': 5,
      },
      {
        '21/11/2022': 6,
      },
    ],
  },
  {
    Bapu: [
      {
        '22/11/2022': 9,
      },
      {
        '23/11/2022': 7,
      },
      {
        '24/11/2022': 8,
      },
    ],
  },
  {
    Prem: [
      {
        '25/11/2022': 0,
      },
      {
        '26/11/2022': 3,
      },
      {
        '27/11/2022': 1,
      },
    ],
  },
];

const renderItem = ({item}: {item: any}) => {
  let name = Object.keys(item);
  // console.log('NAME', name);

  return (
    <View style={styles.flex}>
      <Text style={styles.nameWidth}>{name}</Text>
      {item[`${name}`].map((val: any) => {
        // console.log(val);
        // console.log(Object.values(val));
        return (
          <View style={styles.dataAndValue}>
            <Text>{Object.keys(val)}</Text>
            <Text>{Object.values(val)}</Text>
          </View>
        );
      })}
    </View>
  );
};

const DataTableMatrix = () => {
  // useEffect(() => {}, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderItem} style={styles.flatList} />
    </SafeAreaView>
  );
};

export default DataTableMatrix;

const styles = StyleSheet.create({
  container: {},
  flex: {
    flexDirection: 'row',
    margin: 10,
  },
  dataAndValue: {
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  flatList: {borderWidth: 1},
  nameWidth: {width: 50},
});
