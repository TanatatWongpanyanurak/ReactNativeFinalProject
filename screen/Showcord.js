import { StyleSheet, Text, View, FlatList, Image,SafeAreaView,ScrollView ,ImageBackground} from 'react-native'
import React from 'react'
import { db } from '../firebase/config.js'
import { collection, getDocs } from "firebase/firestore";
import { async } from '@firebase/util';
import { useEffect, useState } from 'react'
const Showcord = ({navigation,route}) => {
  const {gui} = route.params
  const [chord, setChord] = useState([])
  const docRef = collection(db, gui)
  useEffect(async () => {
    const data = await getDocs(docRef,gui)
    let Data = []
    data.forEach((doc) => {
      const dataC = doc.data()
      Data.push({
        id: doc.id,
        Cname: dataC.Cname,
        image: dataC.image
      })
    })
    setChord(Data)
  }, [])
  const _renderItem = ({ item }) => {
    return (
      <SafeAreaView style={{alignItems:'center'}}>
       <ScrollView style={{marginHorizontal:20}}>
      <View style={{marginBottom:5}}>
        <Text>{item.Cname}</Text>
        <Image
          source={{ uri: item.image }}
          style={styles.thumbnail}
        />
      </View>
      </ScrollView>
      </SafeAreaView>
    )
  }


  return (
    <SafeAreaView>
  <ScrollView>
    <View >
      <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/81/6a/d5/816ad56d0b3116eaf83dd832813f1adb.jpg' }}
      >
      <FlatList
        data={chord}
        keyExtractor={(item) => item.id.toString()}
        renderItem={_renderItem}
      />
      </ImageBackground>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}


export default Showcord

const styles = StyleSheet.create({
  container: {
    height: 80,
    elevation: 3,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 20,
  },
  dataContainer: {
    flex: 1,
  },

  thumbnail: {
    width: 100,

    height: 100,
  },
  dataContent: {
    marginTop: 5,
    marginLeft: 15,
  },
  title: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
    color: "#888",
    fontWeight: "700",
  },
  addButtonStyle: {
    width: '100%',        
    marginBottom: 15,
},
scrollView: {
  backgroundColor: 'pink',
  marginHorizontal: 20,
},
});

