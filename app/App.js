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



import Cell from './components/Cell';

export default class App extends Component {


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
        text: "",
        ktg: [],
        datam: [],
        datamx: [],
        animating: true,
        secilenKtg: 0,
    };


    componentWillMount() {

        //this.props.navigation.navigate('Detay');
        this._ktgList();
        //this._dataCek("");
        this._ktgSec({
            "id": 28,
            "name": "Aksiyon"
        });
    }





    _ktgList() {

        var x = [
            {
                "id": 28,
                "name": "Aksiyon"
            },
            {
                "id": 12,
                "name": "Macera"
            },
            {
                "id": 16,
                "name": "Animasyon"
            },
            {
                "id": 35,
                "name": "Komedi"
            },
            {
                "id": 80,
                "name": "Suç"
            },
            {
                "id": 99,
                "name": "Belgesel"
            },
            {
                "id": 18,
                "name": "Dram"
            },
            {
                "id": 10751,
                "name": "Aile"
            },
            {
                "id": 14,
                "name": "Fantastik"
            },
            {
                "id": 36,
                "name": "Tarih"
            },
            {
                "id": 27,
                "name": "Korku"
            },
            {
                "id": 10402,
                "name": "Müzik"
            },
            {
                "id": 9648,
                "name": "Gizem"
            },
            {
                "id": 10749,
                "name": "Romantik"
            },
            {
                "id": 878,
                "name": "Bilim-Kurgu"
            },
            {
                "id": 10770,
                "name": "TV film"
            },
            {
                "id": 53,
                "name": "Gerilim"
            },
            {
                "id": 10752,
                "name": "Savaş"
            },
            {
                "id": 37,
                "name": "Vahşi Batı"
            }
        ]


        var y = x.map((ktgx) => {
            if (this.state.secilenKtg === ktgx.id) {
                return <Text onPress={() => this._ktgSec(ktgx)} style={[styles.ktgItem, {color: '#f57722'}]}
                             key={ktgx.id}>{ktgx.name}</Text>
            }
            return <Text onPress={() => this._ktgSec(ktgx)} style={styles.ktgItem} key={ktgx.id}>{ktgx.name}</Text>
        });
        this.setState({ktg: y});
    }

    _ktgSec(id = {"id": 28, "name": "Aksiyon"}) {

        this.setState({secilenKtg: id.id});
        this.setState({datam: []});
        this.setState({animating: true});
        const url = "https://api.themoviedb.org/3/discover/tv?api_key=1e965f89fee8006840893e69fb9b19e6&language=tr-TR&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=" + id.id + "&include_null_first_air_dates=false";

        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {

                //console.log(responseJson);

                const datam = responseJson.results.map((value) => {

                    if (value.overview != "") {
                        return <Cell key={value.id} url={"https://image.tmdb.org/t/p/w500/" + value.poster_path}
                                     name={value.original_name}
                                     desc={value.overview.substr(0, 150)} puan={value.vote_average}/>
                    }

                });

                this.setState({animating: false});
                this.setState({datam});
                this.setState({datamx: responseJson.results});
                this._ktgList();

            })
            .catch((error) => {
                console.error(error);
            });
    }


    _dataCek(arama) {
        Keyboard.dismiss();
        this.setState({animating: true});
        var url = "https://api.themoviedb.org/3/tv/popular?api_key=1e965f89fee8006840893e69fb9b19e6&language=tr-TR&page=1";
        if (arama != "") {
            url = "https://api.themoviedb.org/3/search/tv?api_key=1e965f89fee8006840893e69fb9b19e6&language=en-US&query=" + arama + "&page=1";
            this.setState({datam: []});
        }

        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log(responseJson);
                const datam = responseJson.results.map((value) => {
                    if (value.overview != "") {
                        return <Cell key={value.id} url={"https://image.tmdb.org/t/p/w500/" + value.poster_path}
                                     name={value.original_name}
                                     desc={value.overview.substr(0, 150)} puan={value.vote_average}/>
                    }
                });
                this.setState({animating: false});
                this.setState({datam});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _islemYap() {
        this._dataCek(this.state.text);
    }

    _keyExtractor = (item, index) => item.id;


    _detayaGit(item){

        //alert(item.original_name);
        this.props.navigation.navigate('Detay', {items: item});
    }

    _renderItem({item}) {
        //onPress={() => this.props.navigation.navigate('Detay')}
        if (item.overview != "") {
            return <TouchableOpacity
                activeOpacity={10}
                focusedOpacity={10}
                onPress={()=>this._detayaGit(item)}>
                <Cell key={item.id} url={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
                      name={item.original_name}
                      desc={item.overview.substr(0, 150)} puan={item.vote_average}/>
            </TouchableOpacity>
        }
    };

    _sonaGeldi() {
        //alert("sona geldi");
        //this.props.navigation.navigate('Detay');
    }

    render() {

        return (


            <View style={styles.container}>
                <StatusBar
                    backgroundColor="black"
                    barStyle="light-content">
                </StatusBar>

                <View style={styles.ktgler}>
                    <ScrollView
                        pagingEnabled={true}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        {this.state.ktg}
                    </ScrollView>
                </View>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={[styles.centering, {height: 80}, this.state.animating ? {} : styles.hidden]}
                    size="large"
                />
                <FlatList
                    data={this.state.datamx}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem.bind(this)}
                    onEndReached={this._sonaGeldi}
                    numColumns={2}
                />



            </View>
        );
    }
}


//onPress={() => this.props.navigation.navigate('Detay')}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginHorizontal: 2,
        marginTop: 2,
        padding: 5
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    hidden: {
        width: 0,
        height: 0,
    },
    ktgler: {
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ktgItem: {
        margin: 7,
        fontSize: 17,
        justifyContent: 'center',
        fontWeight: 'bold',
        color: '#2a2a2a',
    }
});
