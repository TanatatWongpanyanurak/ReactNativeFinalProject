import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput,SafeAreaView,Image,  } from "react-native";
import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';
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
 const info = createNativeStackNavigator();
 function infoo(){
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
       
       <info.Screen name ='Info' component={Info} options={{headerShown:false}}/>
       
     </Stack.Navigator>
   )
 }
      const Stack = createNativeStackNavigator();
      function ProductStack(){
        return(
          <Stack.Navigator screenOptions={{
            headerStyle:{
              backgroundColor:'#7FB3D5'
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
              backgroundColor:'#F0B27A'
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


const Drawer = createBottomTabNavigator();

function MyDrawer (){
  return(
    <Drawer.Navigator useLegacyImplementation
       drawerContent={(props)=><CustomDrawerContent{...props}/>}
        screenOptions ={({route})=> ({
          tabBarIcon:({focused,colors,size}) =>{
            let iconItem
              if(route.name ==='Home'){
                iconItem=focused?'mic':'mic-outline'
              }else if(route.name ==='ChordShow'){
                iconItem=focused?'ios-musical-notes':'ios-musical-notes-outline'
              }
              else if(route.name ==='SongShow'){
                iconItem=focused?'reorder-four':'reorder-four-outline'
              }
              return <Ionicons name={iconItem} size={size} color={colors}/>
          } 
        })}>
        <Drawer.Screen name="Home" component={infoo} options={{headerShown:false}}/>
        <Drawer.Screen name="ChordShow" component={ProductStack}options={{headerShown:false}} />
        <Drawer.Screen name="SongShow" component={ProductStackz} options={{headerShown:false}}/>
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