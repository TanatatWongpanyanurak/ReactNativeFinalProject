import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const Info = ({ navigation }) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 180,
          
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={() => navigation.navigate('Home')}
          showSkipButton={true}
          onSkip={() => navigation.navigate('Home')}
          style={{color : 'black'}}
        />
      ) :(
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={() => navigation.navigate('Home')}
          showSkipButton={true}
          onSkip={() => navigation.navigate('Home')}
          style={{color : 'black'}}
        />
      )
      }
    </>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Calendar',
    title: 'Mobile Recharge',
    image: {
      uri:
        'https://i.pinimg.com/564x/55/46/81/554681583a113f259901cfdae11d6358.jpg',
    },
    backgroundColor: '#FFFFFF',
  },
  {
    key: 's2',
    title: 'Flight Booking',
    text: 'Alram',
    image: {
      uri:
        'https://i.pinimg.com/564x/5b/37/a0/5b37a0e22d1062fd29aa710f36f7176a.jpg',
    },
    backgroundColor: '#FFFFFF',
  },
  {
    key: 's3',
    title: 'Great Offers',
    text: 'Note',
    image: {
      uri:
        'https://i.pinimg.com/564x/39/d0/4b/39d04bd0d9930eda73f40b06c74e78f0.jpg',
    },
    backgroundColor: '#FFFFFF',
  },
  {
    key: 's4',
    title: 'Best Deals',
    text: 'Report ',
    image: {
      uri:
        'https://i.pinimg.com/564x/82/6c/a8/826ca8a363ef0db3161b2827cb7bcbea.jpg',
    },
    backgroundColor: '#FFFFFF',
  }
];
