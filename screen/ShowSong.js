import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { db } from '../firebase/config.js'
import { collection, getDocs } from "firebase/firestore";
import { async } from '@firebase/util';
import { useEffect, useState } from 'react'
const ShowSong = ({navigation,route}) => {
    const {ss} = route.params
  const [song, setSong] = useState([])
  const docRef = collection(db,'Song')
  useEffect(async () => {
    const data = await getDocs(docRef,'Song')
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
        
      </View>
    )
  }


  return (
    <View>
      <FlatList
        data={song}
        ItemSeparatorView = {ItemSeparatorView}
        keyExtractor={(item) => item.id.toString()}
        renderItem={_renderItem}
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
});

