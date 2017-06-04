import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    ListView
} from 'react-native';


export default class Content extends Component {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.list}>
                    <ScrollView
                        showsVerticalScrollIndicator={false} >
                        <View style={styles.list}>
                            {this.props.datam}
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:-12
    },
    content: {
        flex: 1
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent:'space-between'
    },
});
