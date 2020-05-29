import React from 'react';
import {StyleSheet, ImageBackground, TextInput, View, Button} from 'react-native';
import { AsyncStorage } from 'react-native';

export default class StartScreen extends React.Component{

    constructor(props) {
        super(props);
    }

    state = {userName: ""};

    _storeData = async () => {
        try {
            const { userName } = this.state;
            await AsyncStorage.setItem(
                'userName',
                userName
            );
        } catch (error) {
            // Error saving data
        }
    };

    render() {

        const { navigation } = this.props;

        const styles = StyleSheet.create({

            container: {
                flex: 1,
            },

            image: {
                flex: 1,
                resizeMode: "cover",
                justifyContent: "center"
            },

            viewStyling: {
                flex: 1,
                alignSelf: 'center',
                padding: 12,
                height: 'auto',
                justifyContent:'center',
                alignItems: 'center'
            },

            textStying: {
                height: 40,
                padding: 10,
                margin: 18,
                fontSize: 18,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#48BBEC',
                backgroundColor: 'rgba(0,0,0,0)',
            },
        });

        return(
                <ImageBackground source={require('../assets/StartFoto.jpg')} style={styles.image}>
                    <View style={styles.viewStyling}>
                        <TextInput placeholder="Type uw naam"
                                   style={styles.textStying}
                                   value={this.state.userName}
                                   onChangeText={userName => this.setState({userName})}/>
                        <Button title="Oke" onPress={() => { navigation.navigate("DifficultyScreen"); this._storeData(); }}/>
                    </View>
                </ImageBackground>
        );
    }
}