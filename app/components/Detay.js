import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class Detay extends Component {


    static navigationOptions = {
        title: 'Dizii Goo',
        headerTintColor:'white',
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTitleStyle: {
            color: 'white',
            fontSize: 20,
            textAlign: 'left',
            fontWeight: 'bold'

        }
    };


    state = {
        items: {}
    };

    componentWillMount() {
        this.setState({items: this.props.navigation.state.params.items});
        //this.navigationOptions.title = this.props.navigation.state.params.items.original_name;
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                showsHorizontalScrollIndicator={false}
                >
                    <Image
                        resizeMode={Image.resizeMode.contain}
                        style={{width: width, height: 200}}
                        source={{uri: 'https://image.tmdb.org/t/p/w500/' + this.state.items.backdrop_path}}
                    />
                    <View style={styles.yazilar}>
                        <Text style={styles.isim}>{this.state.items.original_name}</Text>
                        <Text style={styles.aciklama}>{this.state.items.overview}</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    isim: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    aciklama: {
        fontSize: 15,
        color: '#696969',
    },
    yazilar:{
        padding:10
    }
});

