import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput,SafeAreaView,Image} from "react-native";
import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import React from "react";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import Showcord from "./screen/Showcord.js"
import ChordShow from "./screen/ChordShow";
import ShowSong from "./screen/ShowSong";
import SongShow from "./screen/SongShow"
import Info from "./screen/Info";
const MyTheme ={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'rgb(12,90,85)'

  }
}

   function CustomDrawerContent(props) {
  return (
  <SafeAreaView>

    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Close drawer" 
      onPress={() => props.navigation.closeDrawer()} />

    </DrawerContentScrollView>
    </SafeAreaView>
   );
 }
      const Stack = createNativeStackNavigator();
      function ProductStack(){
        return(
          <Stack.Navigator screenOptions={{
            headerStyle:{
              backgroundColor:'#0096DA'
            },
            headerTintColor:'#ffff',
            headerTitleStyle:{
              fontWeight:'bold'
            }

          }}>
            
            <Stack.Screen name ='ChordShow' component={ChordShow}/>
            <Stack.Screen name ='Showcord' component={Showcord}/>
          </Stack.Navigator>
        )
      }
      const Stackz = createNativeStackNavigator();
      function ProductStackz(){
        return(
          <Stack.Navigator screenOptions={{
            headerStyle:{
              backgroundColor:'#0096DA'
            },
            headerTintColor:'#ffff',
            headerTitleStyle:{
              fontWeight:'bold'
            }

          }}>
            <Stackz.Screen name ='SongShow' component={SongShow}/>
            <Stackz.Screen name ='ShowSong' component={ShowSong}/>
          </Stack.Navigator>
        )
      }


const Drawer = createDrawerNavigator();

function MyDrawer (){
  return(
    <Drawer.Navigator useLegacyImplementation
       drawerContent={(props)=><CustomDrawerContent{...props}/>}
        screenOptions ={{
          drawerStyle:{
            width:240
          }
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="ChordShow" component={ProductStack} />
        <Drawer.Screen name="SongShow" component={ProductStackz} />
      </Drawer.Navigator> 
  );
}
const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer/>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create
({sideMenuProfileIcon: 
  {resizeMode: 'center'
  ,width: 100,height: 100,
  borderRadius: 100 / 2,
  alignSelf: 'center',},})