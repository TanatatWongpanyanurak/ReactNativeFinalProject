import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Calendar } from 'react-native-calendars';



function Calenda() {
  const running = {key: 'running', color: 'blue'};
  const cycling = {key: 'cycling', color: 'green'};
  const walking = {key: 'walking', color: 'orange'};
  const marked = {
    '2022-10-16': {
      dots: [running, walking]
    },
    '2022-10-17 ': {
      dots: [running, walking, cycling]
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      
      <Calendar
          theme={{
            'stylesheet.calendar.header': {
              headerContainer: {
                flexDirection: 'row',
                backgroundColor: '#eee',
                borderRadius: 12
              },
            }
          }}
        onDayPress={(day) => console.log('onDayPress', day)}
        onDayLongPress={(day) => console.log('onDayLongPress', day)}
        onMonthChange={(date) => console.log('onMonthChange', date)}
        onPressArrowLeft={(goToPreviousMonth) => {
          console.log('onPressArrowLeft'); goToPreviousMonth();
        }}
        onPressArrowRight={(goToNextMonth) => {
          console.log('onPressArrowRight'); goToNextMonth();
        }}
        initialDate="2022-10-01"
        minDate="2022-10-01"
        maxDate="2023-10-30"
        markingType="multi-dot"
        markedDates={marked}
        disableAllTouchEventsForDisabledDays={true}
      />
    </SafeAreaView>
  );
      }
export default Calenda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  
});