import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation'

class MyPage4 extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >

        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >

          <Image
            style={{
              flex: 1,
              resizeMode: 'cover',
            }}
            source={require('../assets/bg_app.png')}
          />

        </View>

        <View style={styles.container}>

          <Text style={styles.text}>Page 4 !</Text>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 30,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  }
});


// export default Page4Stack = createStackNavigator({

//   MyPage4: {
//     screen: MyPage4,
//     navigationOptions: ({ navigation }) => ({
//       headerTitle: "My Page 4",
//       headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Icon name='menu' size={35} /></TouchableOpacity></View>
//     })
//   },

// });

export default MyPage4;