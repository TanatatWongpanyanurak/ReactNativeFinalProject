import * as React from 'react';
import { FAB, Portal, Provider,icon } from 'react-native-paper';
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View,Modal,SafeAreaView,Button,TouchableOpacity,Image } from 'react-native'
import { HeaderButtons } from "react-navigation-header-buttons";
const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);
const HomeScreen = ({ navigation }) => {
  const [state, setState] = React.useState({ open: false });
  const[showModal,setShowModal] = React.useState(false)
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
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
    <Provider>
      <View>
    <Portal>    
        <FAB.Group
          open={open}
          iconName='plus'
          actions={[
            { iconName: 'plus', onPress: () => console.log('Pressed add') },
            {
              icon: 'star',
              label: 'Star',
              onPress: () => setShowModal(!showModal),
            },
            {
              icon: 'email',
              label: 'Email',
              onPress: () => console.log('Pressed email'),
            },
            {
              icon: 'bell',
              label: 'Remind',
              onPress: () => console.log('Pressed notifications'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
      <Modal
         animationType='fade'
         transparent={false}
         visible={showModal}
         onRequestClose={()=> alert('Model has Been closed')}
        >
           <View style ={styles.centeredView}>
                <Text style={styles.modalText}
                >ไฟในห้องปิดอยู่!</Text>
                
                <Button     
                    title='Switch'
                    onPress={()=> setShowModal(!showModal)}
                    style ={styles.buttonOpen}
                />
            </View>
      </Modal>
      <View>
        <Text></Text>
      </View>
      </View>
    </Provider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({centeredView: {flex: 1,justifyContent: 'center',alignItems: 'center',marginTop: 22,},
modalView: {margin: 20,backgroundColor: 'white',borderRadius: 20,padding: 35,alignItems: 'center',shadowColor: '#000',
shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 4,elevation: 5,},
button: {borderRadius: 20,padding: 10,elevation: 2,},
buttonOpen: {backgroundColor: '#F194FF',},
buttonClose: {backgroundColor: '#2196F3',},
textStyle: {color: 'white',fontWeight: 'bold',textAlign: 'center',},
modalText: {marginBottom: 15,textAlign: 'center',},});