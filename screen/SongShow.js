import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { db } from '../firebase/config.js'
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react'

const Songg = [
    {
        id: '1',
        ss: 'ซ่อนกลิ่น'
    },
    {
        id: '2',
        ss: 'ถ้าเขาจะรัก(ยืนเฉยๆ เขาก็รัก)'
    },
    {
        id: '3',
        ss: 'ถ้าเธอต้องเลือก'
    },
    {
        id: '4',
        ss: 'ธารารัตน์'
    },
    {
        id: '5',
        ss: 'Chord E'
    },
    {
        id: '6',
        ss: 'Chord F'
    },
    {
        id: '7',
        ss: 'Chord G'
    }

]


const ChordShow = ({ navigation }) => {
    const [song, setSong] = useState([])
    const docRef = collection(db,'Song')
    useEffect(async () => {
      const data = await getDocs(docRef)
      let Data = []
      data.forEach((doc) => {
        const dataS = doc.data()
        Data.push({
          id: doc.id,
          Album: dataS.Album,
          Genre: dataS.Genre,
          Singer: dataS.Singer,
          Sname: dataS.Sname
        })
      })
      setSong(Data)
    }, [])
    const _renderItem = ({ item }) => {
      return (
        <SafeAreaView>
            <TouchableOpacity
              style={styles.addButtonStyle}
              onPress={()=>{
                navigation.navigate('ShowSong',{
                  id:item.id
                })
              }}
            >
        <View>
          <Text>{item.Sname}</Text>
        </View>
        </TouchableOpacity>
        </SafeAreaView>
      )
    }
  
  
    return (
      <View>
        <FlatList
          data={song}
          keyExtractor={(item) => item.id.toString()}
          renderItem={_renderItem}
        />
      </View>
    )
  }
  

export default ChordShow

const styles = StyleSheet.create({
    addButtonStyle: {
        width: '100%',
        marginBottom: 15,
        height: 0.5,   
        backgroundColor: "#C8C8C8",
    },
})