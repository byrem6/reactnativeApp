

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>

          <Text style={styles.headerText}>Dizii Goo</Text>
          <Text style={styles.btn}></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    header:{
        backgroundColor:'white',
        height:50,
        paddingTop:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',

        paddingLeft:5,
        paddingRight:5
    },
    btn:{
        color:'#2a2a2a'
    },
    headerText:{
        color:'#2a2a2a',
        fontWeight:'bold',
        fontSize:30,
        textAlign:'left',
    },
    icon:{
      width:24,
      height:24
    }

});
