import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { db } from '../firebase/config.js'
import { collection, doc, getDoc,onSnapshot } from "firebase/firestore";
import { async } from '@firebase/util';
import { useEffect, useState } from 'react'
const ShowSong = ({navigation,route}) => {
    const {id} = route.params
  const [song, setSong] = useState([])
  const docRef = doc(db,'Song',id)
  useEffect(async () => {
    const data = await getDoc(docRef)
      const dada = data.data()
      console.log(dada)
    setSong(dada)
  }, [])

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
  const _renderItem = ({ item }) => {
    return (
      <View>
        <Text>Album: {item.Album}</Text>
        <Text>Genre: {item.Genre}</Text>
        <Text>Singer: {item.Singer}</Text>
        <Text>Songname: {item.Sname}</Text>
        <Image
           resizeMode="cover"
          source={{ uri: item.image }}
          style={styles.thumbnail}
        />      
      </View>
    )
  }


  return (
    <View>
      <Text>Album: {song.Album}</Text>
      <Text>Genre: {song.Genre}</Text>
      <Text>Singer: {song.Singer}</Text>
      <Text>Songname: {song.Sname}</Text>
      <Image
        source={{uri:song.image}}
        style={styles.thumbnail}
      />
    </View>
  )
}


export default ShowSong

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
    width: 500,

    height: 700,
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
});

