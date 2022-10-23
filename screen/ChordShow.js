import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
const Chordd = [
    {
        id: '1',
        gui: 'Chord A'
    },
    {
        id: '2',
        gui: 'Chord B'
    },
    {
        id: '3',
        gui: 'Chord C'
    },
    {
        id: '4',
        gui: 'Chord D'
    },
    {
        id: '5',
        gui: 'Chord E'
    },
    {
        id: '6',
        gui: 'Chord F'
    },
    {
        id: '7',
        gui: 'Chord G'
    }

]
const ChordShow = ({ navigation }) => {
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
    const _render = ({ item }) => {
        <SafeAreaView>
            <TouchableOpacity
                style={styles.addButtonStyle}
                onPress={() => navigation.navigate('Showcord', { gui: item.gui })}
            >
                <View >
                    <Text>{item.gui}</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    }
    return (
        <View >
            <SafeAreaView>
            <TouchableOpacity
                style={styles.addButtonStyle}
                onPress={() => navigation.navigate('Showcord', { gui: 'Chord A' })}
            >
                <View>
                    <Text style={styles.title}>Chord A</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.addButtonStyle}
                onPress={() => navigation.navigate('Showcord', { gui: 'Chord B' })}
            >
                <View style={styles.container}>
                    <Text style={styles.title}>Chord B</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.addButtonStyle}
                onPress={() => navigation.navigate('Showcord', { gui: 'Chord C' })}
            >
                <View style={styles.container}>
                    <Text>Chord C</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.addButtonStyle}
                onPress={() => navigation.navigate('Showcord', { gui: 'Chord D' })}
            >
                <View style={styles.container}>
                    <Text>Chord D</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.addButtonStyle}
                onPress={() => navigation.navigate('Showcord', { gui: 'Chord E' })}
            >
                <View style={styles.container}>
                    <Text>Chord E</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.addButtonStyle}
                onPress={() => navigation.navigate('Showcord', { gui: 'Chord F' })}
            >
                <View style={styles.container}>
                    <Text>Chord F</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.addButtonStyle}
                onPress={() => navigation.navigate('Showcord', { gui: 'Chord G' })}
            >
                <View style={styles.container}>
                    <Text>Chord G</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
        </View>
    )
}

export default ChordShow

 
const styles = StyleSheet.create({
    container: {
      height: 80,
      elevation: 3,
      borderRadius: 5,
      flexDirection: "row",
      marginHorizontal: 20,
    },
    dataContainer: {
      flex: 1,
    },
  
    thumbnail: {
      width: 200,
  
      height: 200,
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
      height: 7,   
        backgroundColor: "#C8C8C8"
  },
  });

  