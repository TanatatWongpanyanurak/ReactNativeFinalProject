import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { db } from './firebase/config.js'
import { collection, getDocs } from "firebase/firestore";
import { async } from '@firebase/util';
const Showcord = () => {
    const docRef = collection(db, 'Test')
    const data = async () => {
        const querySnapshot = await getDocs(docRef);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });

    }
    data();
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default Showcord

const styles = StyleSheet.create({})