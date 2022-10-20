import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screen/HomeScreen";
import Info from "./screen/Info";
import Calenda from "./screen/Calenda";


const MyTheme ={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:'rgb(12,90,85)'

  }
}

function SettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Setting!!!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <SafeAreaView>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MyDrawer() {
  return (
    <Stack.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 240,
        },
      }}
    >
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Home" component={MyTab} />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
}


function MyTab (){
    return(
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Setting") {
            iconName = focused ? "list-outline" : "ios-list";
          }
          //you can return any compernent that you like here
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calenda" component={Calenda} /> 

      <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    )

}
const App = () => {
  return (
    
      <NavigationContainer theme={MyTheme}>
        <MyDrawer/>
      </NavigationContainer>
      
  );
};

export default App;

const styles = StyleSheet.create({});