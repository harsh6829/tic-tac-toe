// import {StyleSheet, Text, View} from 'react-native';
// import React, {useState} from 'react';

// const DateMatrix = () => {
//   const [activeDate, setActiveDate] = useState(new Date());
//   let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//   let nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   const generateMatrix = () => {
//     var matrix = [];
//     // Create header
//     matrix[0] = weekDays;

//     var year = activeDate.getFullYear();
//     var month = activeDate.getMonth();
//     var firstDay = new Date(year, month, 1).getDay();

//     var maxDays = nDays[month];
//     if (month == 1) {
//       // February
//       if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//         maxDays += 1;
//       }
//     }

//     var counter = 1;
//     for (var row = 1; row < 7; row++) {
//       matrix[row] = [];
//       for (var col = 0; col < 7; col++) {
//         matrix[row][col] = -1;
//         if (row == 1 && col >= firstDay) {
//           // Fill in rows only after the first day of the month
//           matrix[row][col] = counter++;
//         } else if (row > 1 && counter <= maxDays) {
//           // Fill in rows only if the counter's not greater than
//           // the number of days in the month
//           matrix[row][col] = counter++;
//         }
//       }
//     }

//     return matrix;
//   };

//   [
//     ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
//     [-1, -1, -1, -1, 1, 2, 3],
//     [4, 5, 6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15, 16, 17],
//     [18, 19, 20, 21, 22, 23, 24],
//     [25, 26, 27, 28, 29, 30, 31],
//     [-1, -1, -1, -1, -1, -1, -1],
//   ];

//   console.log(generateMatrix());
//   return (
//     <View style={styles.container}>
//       <Text>DateMatrix</Text>
//     </View>
//   );
// };

// export default DateMatrix;

// const styles = StyleSheet.create({
//   container: {backgroundColor: 'red'},
// });

import * as React from 'react';
import {Text, View} from 'react-native';

export const months = [
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
const DateMatrix = () => {
  const [activeDate, setActiveDate] = React.useState(new Date());

  const onPress = (item: any) => {
    console.log('---->item', item);
    // if (!item.match && item !== -1) {
    setActiveDate(item);
    // }
  };

  //   const changeMonth = n => {
  //     setState(() => {
  //       state.activeDate.setMonth(state.activeDate.getMonth() + n);
  //       return state;
  //     });
  //   };

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const generateMatrix = () => {
    const matrix = [];
    // Create header
    matrix[0] = weekDays;

    const year = activeDate?.getFullYear();
    console.log('YEARA', year);

    const month = activeDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();

    console.log('FIRST DATA', firstDay);

    var maxDays = nDays[month];
    if (month === 1) {
      // February
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        maxDays += 1;
      }
    }

    var counter = 1;
    for (var row = 1; row < 7; row++) {
      matrix[row] = [];
      for (var col = 0; col < 7; col++) {
        matrix[row][col] = -1;
        if (row == 1 && col >= firstDay) {
          // Fill in rows only after the first day of the month
          matrix[row][col] = counter++;
        } else if (row > 1 && counter <= maxDays) {
          // Fill in rows only if the counter's not greater than
          // the number of days in the month
          matrix[row][col] = counter++;
        }
      }
    }

    return matrix;
  };

  const matrix = generateMatrix();
  console.log(matrix);

  let rows = [];
  rows = matrix.map((row, rowIndex) => {
    console.log('ITEMNAEJN', row);
    var rowItems = row.map((item, colIndex) => {
      return (
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 1,
            height: 18,
            textAlign: 'center',
            // Highlight header
            backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
            // Highlight Sundays
            color: colIndex == 0 ? '#a00' : '#000',
            // Highlight current date
            fontWeight: item === activeDate.getDate() ? 'bold' : '',
          }}
          onPress={() => onPress(item)}>
          {item !== -1 ? item : ''}
        </Text>
      );
    });

    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 15,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        {rowItems}
      </View>
    );
  });

  return (
    <View>
      {rows}

      {/* <Button title="Previous" onPress={() => changeMonth(-1)} /> */}

      {/* <Button title="Next" onPress={() => changeMonth(+1)} /> */}
    </View>
  );
};

// Export for now to get rid of error and see preview:
export default DateMatrix;
