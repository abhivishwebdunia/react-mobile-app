import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body } from "native-base";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation'
import {storageService} from '../services/storage.service';




class Profile extends Component {

  constructor(props) {
    super(props);
    this.state={userData:null};
  }

  async componentWillMount(){
    const userData = await storageService.getData('authData');
    this.setState({userData:userData})
  }

  

  render() {
    const {userData} = this.state;
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

          <Image source={require('../assets/avatar.png')}
            style={{
              marginTop: 20,
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.2)',
              alignItems: 'center',
              justifyContent: 'center',
              width: 120,
              height: 120,
              borderRadius: 100,
            }}
          />

          <Text style={styles.paragraph}>
            {userData && userData.userDisplayName}
            </Text>
          <Text style={styles.emailText}>
          {userData && userData.userEmail}
            </Text>

          <Card style={styles.card}>
            <CardItem>
              <Body>
                <Text style={styles.cardTitle}>
                  Organization Name
                </Text>
                <Text style={styles.cardText}>
                {userData && userData.organizationName}
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem>
              <Body>
                <Text style={styles.cardTitle}>
                  Phone No
                </Text>
                <Text style={styles.cardText}>
                {userData && userData.userPhone}
                </Text>
              </Body>
            </CardItem>
          </Card>

         
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


  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },

  emailText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 5,
  },

  card: {
    height: 80,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5
  },

  cardRegime: {
    height: 70,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
  },

  cardProgress: {
    height: 170,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    alignContent: 'center',
  },

  cardTitle: {
    fontSize: 18,
    color: '#000000'
  },

  cardText: {
    fontSize: 22,
    color: 'grey',
    fontWeight: 'bold'
  }

});

export default Profile;