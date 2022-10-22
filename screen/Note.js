import { StyleSheet, Text, View,Modal,SafeAreaView,Button,TouchableOpacity,Image } from 'react-native'
import { HeaderButtons } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { Calendar } from 'react-native-calendars';
import React from 'react'
import { TextInput } from 'react-native-paper';
import ColorPicker from 'react-native-wheel-color-picker'

    
const IoniconsHeaderButton = (props) => (
    <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
  );
const note = ({navigation,route}) => {
  const [text, setText] = React.useState("");
  const[showModal,setShowModal] = React.useState(false)
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
              <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                <Ionicons name="add-circle" size="40px" color="#FEE00" />
              </TouchableOpacity>
            </HeaderButtons>
          ),
        });
      }, [navigation]);
  return (
    <View>
      <Text style={{ fontSize: 25}}>DATE : {route.params?.selected}</Text>
      <Modal
         animationType='fade'
         transparent={false}
         visible={showModal}
         onRequestClose={()=> alert('Model has Been closed')}
        >
           <View style ={styles.centeredView}>
            <TextInput
            label="Name"
            value={text}
              onChangeText={text => setText(text)}
    />      
      <ColorPicker
    onColorSelected={color => alert(`Color selected: ${color}`)}
    style={{flex: 1}}
      />  
               <Button     
                    title='กรุณากดปุ่มเพื่อเปิดอีกครั้งไฟ'
                    onPress={()=> setShowModal(!showModal)}
                    style ={styles.buttonOpen}
                />
            </View>
      </Modal>
    </View>
  )
}

export default note

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    square: {
      width: 24,
      height: 24,
      backgroundColor: '#55BCF6',
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 15,
    },
    itemText: {
      maxWidth: '80%',
    },
    circular: {
      width: 12,
      height: 12,
      borderColor: '#55BCF6',
      borderWidth: 2,
      borderRadius: 5,
    },
  });
  