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
          padding:220
        }}>
          <View style={{alignItems: 'center',
          justifyContent: 'center',}}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text >{item.text}</Text>
        </View>
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
    width: 300,
    height: 300,
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
    text: 'เนื้อเพลงและคอร์ดเพลงสำหรับผู้เริ่มเล่น',
    title: 'Lyrics',
    image: {
      uri:
        'https://i.pinimg.com/564x/01/7b/d9/017bd9efd9b62b3d9730cb39ce9b98ca.jpg',
    },
    backgroundColor: '#FFFFFF',
  },
  {
    key: 's2',
    title: 'Chords',
    text: 'คอร์ดกีตาร์ และวิธีการกดคอร์ด',
    image: {
      uri:
        'https://i.pinimg.com/564x/66/45/21/6645218d8345a8c2b174b54e2ec653ce.jpg',
    },
    backgroundColor: '#FFFFFF',
  },
  {
    key: 's3',
    title: 'Songs',
    text: 'สร้างเสียงเพลงด้วยกีต้าร์กับเพื่อนๆของคุณ',
    image: {
      uri:
        'https://i.pinimg.com/564x/45/4e/c6/454ec6822221b2d4841ec45fc480741b.jpg',
    },
    backgroundColor: '#FFFFFF',
  },
];
