import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView, Image ,ImageBackground } from 'react-native'
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
        <View  >
            <SafeAreaView>
               <ImageBackground
                source={{ uri: 'https://i.pinimg.com/564x/81/6a/d5/816ad56d0b3116eaf83dd832813f1adb.jpg' }}
               > 
               <View style={{ justifyContent:'center', marginTop: 15}}>
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
                    <View >
                        <Text style={styles.title}>Chord B</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.addButtonStyle}
                    onPress={() => navigation.navigate('Showcord', { gui: 'Chord C' })}
                >
                    <View >
                        <Text style={styles.title}>Chord C</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.addButtonStyle}
                    onPress={() => navigation.navigate('Showcord', { gui: 'Chord D' })}
                >
                    <View>
                        <Text style={styles.title}>Chord D</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.addButtonStyle}
                    onPress={() => navigation.navigate('Showcord', { gui: 'Chord E' })}
                >
                    <View>
                        <Text style={styles.title}>Chord E</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.addButtonStyle}
                    onPress={() => navigation.navigate('Showcord', { gui: 'Chord F' })}
                >
                    <View >
                        <Text style={styles.title}>Chord F</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.addButtonStyle}
                    onPress={() => navigation.navigate('Showcord', { gui: 'Chord G' })}
                >
                    <View >
                        <Text style={styles.title}>Chord G</Text>
                    </View>
                </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                <Image
                    source={{ uri: 'https://backend.teroasia.com/uploads/pic_tiny/images/%E0%B8%AD_%E0%B9%81%E0%B8%94%E0%B8%874.jpg' }}
                    style={styles.thumbnail}
                />
                </View>
                </ImageBackground>
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
        justifyContent:"space-between",
        fontWeight: "bold",
    },
    detail: {
        fontSize: 16,
        color: "#888",
        fontWeight: "700",
    },
    addButtonStyle: {
        width: 300,
        marginBottom: 15,
        height: 60,
    },
});

