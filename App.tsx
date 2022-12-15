import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  Alert,
  Dimensions,
  TextInput,
} from 'react-native';

const {width} = Dimensions.get('window');

let matrix = 10;

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [textInputVal, setTextInputVal] = useState();
  const [data, setData] = useState(Array(matrix * matrix).fill(''));
  const textInputRef = useRef<TextInput>(null);
  const nextValue = calculateNextValue();

  useEffect(() => {
    if (textInputRef.current?.clear()) {
      setData(Array(matrix * matrix).fill(''));
      setGameStarted(false);
    }
  }, []);

  const onPressBox = (_item: any, index: number) => {
    if (data[index]) {
      return;
    }
    const updatedData = [...data];
    updatedData[index] = nextValue;
    setData(updatedData);
    const winner = calculateWinner(updatedData);
    if (winner !== null) {
      Alert.alert(
        'Winner!!',
        `${winner}`,
        [
          {
            text: 'Restart Game',
            onPress: () => onPressRestart(),
            style: 'default',
          },
        ],
        {cancelable: false},
      );
    }
    if (updatedData.filter(String).length === updatedData.length) {
      Alert.alert('Match is draw', '', [
        {
          text: 'Restart Game',
          onPress: () => onPressRestart(),
          style: 'default',
        },
      ]);
      console.log(updatedData.filter(String).length);
    }
  };

  function calculateNextValue() {
    return data.filter(String).length % 2 === 0 ? 'X' : 'O';
  }

  function getPosiblieWin(num: number) {
    let wins = [];
    let upCrossArray = [];
    let downCrossArray = [];

    for (let row = 0; row < num; row++) {
      let min = num * row;
      let max = num * (row + 1);

      let rowArray = [];
      let colArray = [];

      upCrossArray.push(row * num + row);
      downCrossArray.push(num * (row + 1) - row * 1 - 1);

      for (min; min < max; min++) {
        rowArray.push(min);
      }

      for (let col = 0; col < num; col++) {
        colArray.push(col * num + row);
      }
      wins.push(rowArray);
      wins.push(colArray);
    }

    wins.push(upCrossArray);
    wins.push(downCrossArray);

    return wins;
  }

  const calculateWinner = (updatedData: any) => {
    const possibleWinnerArr = getPosiblieWin(matrix);

    for (let i = 0; i < possibleWinnerArr.length; i++) {
      let array = [];
      for (let j = 0; j < matrix; j++) {
        console.log('----possibleWinnerArr[i][j]', possibleWinnerArr[i][j]);
        array.push(updatedData[possibleWinnerArr[i][j]]);
      }

      if (array.filter(item => item === 'X').length === matrix) {
        return 'X';
      } else if (array.filter(item => item === 'O').length === matrix) {
        return 'O';
      }
    }
    return null;
  };

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => onPressBox(item, index)}>
        <Text style={styles.item} adjustsFontSizeToFit>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const onPressRestart = () => {
    setData(Array(matrix * matrix).fill(''));
    setGameStarted(false);
    setTextInputVal('');
  };

  const onPressBtn = () => {
    if (!!textInputVal && textInputVal >= 3 && textInputVal <= 15) {
      setGameStarted(true);
    } else {
      Alert.alert('Please enter number between 3 to 15');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <TextInput
        placeholder="Enter Number Between 3 to 15"
        style={styles.textInput}
        value={textInputVal}
        onChangeText={val => setTextInputVal(val)}
        ref={textInputRef}
        editable={gameStarted ? false : true}
      />
      <Button onPress={onPressBtn} title="Start Game" />
      {gameStarted ? ( */}
      <>
        <FlatList
          data={data}
          renderItem={renderItem}
          numColumns={matrix}
          keyExtractor={(_item, index) => index.toString()}
        />
        <Button title="Restart Game" onPress={onPressRestart} />
      </>
      {/* ) : null} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    height: width / matrix - 10,
    width: width / matrix - 10,
    borderWidth: 0.5,

    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    fontSize: 25,
  },
  textInput: {
    borderWidth: 1,
    margin: 10,
    padding: 20,
    width: width / 1.2,
  },
});

export default App;
