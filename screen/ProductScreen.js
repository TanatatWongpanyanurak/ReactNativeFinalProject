import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    FlatList,
    Image,
    SafeAreaView,
    TouchableOpacity,
  } from "react-native";
  import React, { useEffect, useState, useCallback } from "react";
  import { useFocusEffect } from "@react-navigation/native";
  import { Chord } from "../Api/cord";
  
  const ProductScreen = ({navigation}) => {
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
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
                style={styles.addButtonStyle}
                onPress={()=>{
                  navigation.navigate('Detail',{
                    name:item.name,
                    Cname:item.Cname
                  })
                }}
          >
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
                <View style={styles.dataContainer}>
                  <View style={styles.dataContainer}>
                    <Text style={styles.title}>{item.name}</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      );
    };
  
    return (
      <View>
        <FlatList
          data={Chord}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={_renderItem}
        />
      </View>
    );
  };
  
  export default ProductScreen;
  
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
      width: 70,
  
      height: 70,
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

  