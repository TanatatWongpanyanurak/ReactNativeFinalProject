import * as React from 'react';
import { FAB, Portal, Provider,icon } from 'react-native-paper';
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View,Modal,SafeAreaView,Button,TouchableOpacity,Image,FlatList} from 'react-native'
import { HeaderButtons } from "react-navigation-header-buttons";
import { Chord } from '../Api/cord';
const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);
const HomeScreen = ({ route,navigation }) => {

  const[showModal,setShowModal] = React.useState(false)
    
  const _RenderChord = ({ item }) => {
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
                style={styles.addButtonStyle}
                onPress={()=>{
                  navigation.navigate('Detail',{
                    name:item.name,
                    cname:item.cname
                  })
                }}
          >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 180,
            
          }}>
          <Text>{item.name}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        </View>
        </TouchableOpacity>
      </SafeAreaView>
      )
  } 

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

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
    <FlatList
      data={Chord}
      keyExtractor={(item) => {item.name.toString()}}
      ItemSeparatorComponent={ItemSeparatorView}
      renderItem={_RenderChord}
    />
  </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

