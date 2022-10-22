import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import Task from './ShowTSList';



function Calenda({ navigation, route }) {
  const running = { key: 'running', color: 'blue' };
  const cycling = { key: 'cycling', color: 'green' };
  const walking = { key: 'walking', color: 'orange' };
  const [selected, setSelected] = React.useState();
  const [selecteditem, setSelectedItem] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const handleAddTask = () => {
    setSelectedItem([...selecteditem, selected])
    setSelected(null);    
  }
  const completeTask = (index) => {
    let itemsCopy = [...selecteditem];
    itemsCopy.splice(index, 1);
    setSelectedItem(itemsCopy)
  }
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
      <Modal animationType={"slide"} transparent={false} visible={showModal}>
        <TouchableOpacity
            style={styles.TouchAdd}
            onPress={() => setShowModal(!showModal)}
          >
            <Text>Note</Text>
          </TouchableOpacity>
        <View>
          {
            selecteditem.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task Kuy={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </Modal>
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
        onDayPress={(day) => {handleAddTask();setSelected(day.dateString);navigation.navigate("Note",{selected})}}
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
       <TouchableOpacity
            onPress={() => setShowModal(!showModal)}
          >
             <Text>Note</Text>
          </TouchableOpacity>
          
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