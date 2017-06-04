import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    Image,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';


width = Dimensions.get('window').width;
height = Dimensions.get('window').height;
margin = 1;

//

export default class Cell extends Component {
    render() {
        return (
            <View style={styles.item}>
                <Image
                    style={styles.resim}
                    source={{uri: this.props.url}}
                />
                <View style={styles.dtm}>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.desc}>{this.props.desc}</Text>

                </View>


                <View style={styles.alt}>

                    <Image
                        style={styles.resim2}
                        source={require('./star.png')}
                        resizeMode="contain"
                    />
                    <Text style={styles.puan}>{this.props.puan}</Text>
                </View>

            </View>


        );
    }
}


const styles = StyleSheet.create({

    resim: {
        width: (width / 2) - (margin * 4),
        height: ((width / 2) - (margin * 4)) * 1.4,
        borderRadius: 4
    },
    container: {
        width: Dimensions.get('window').width - 100,
        padding: 5,
        //height:120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    name: {
        color: '#2a2a2a',
        fontWeight: 'bold'
    },
    dtm: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 5,
        minHeight: 130,
    },
    desc: {
        color: '#696969',
        fontSize: 12
    },
    puan: {
        color: '#67aded',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'right'
    },

    item: {
        margin: 2,
        width: (width / 2) - (margin * 4)
    },
    alt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    puanx: {
        color: '#696969',
        fontWeight: 'bold',
        fontSize: 13,
        textAlign: 'right'
    },
    resim2: {
        height: 14,
        width: (width / 2) - (margin * 4) - 35,

    }


});
