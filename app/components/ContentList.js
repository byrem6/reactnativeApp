import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';

import Cell from './Cell';

export default class ContentList extends Component {


    static navigationOptions = {
        title: 'Dizii Goo',
        //headerTintColor:'#2a2a2a',
        headerStyle:{
            backgroundColor:'white',
        },
        headerTitleStyle:{
            color:'#2a2a2a',
            fontSize:20,
            textAlign:'left',
            fontWeight:'bold'

        }
    };


    _keyExtractor = (item, index) => item.id;

    _renderItem({item}) {
        //onPress={() => this.props.navigation.navigate('Detay')}
        if (item.overview != "") {
            return <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detay')}>
                <Cell key={item.id} url={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
                      name={item.original_name}
                      desc={item.overview.substr(0, 150)} puan={item.vote_average}/>
            </TouchableOpacity>
        }
    };

    _sonaGeldi() {
        alert("sona geldi");

        this.props.navigation.navigate('Detay');
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    onEndReached={this._sonaGeldi}
                    numColumns={2}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({});

