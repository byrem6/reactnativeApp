import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ActivityIndicator,
    Keyboard,
    ScrollView,
    FlatList,
    TouchableOpacity,
    StatusBar
} from 'react-native';




import {
    StackNavigator,
} from 'react-navigation';


import App from './App';
import Detay from './components/Detay';
import ContentList from './components/ContentList';



const Main = StackNavigator({
    Main: {screen: App},
    Detay:{screen: Detay},
    Detayx:{screen: ContentList},
});

export default Main;