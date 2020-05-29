import React from 'react';
import {StyleSheet, View, TouchableNativeFeedback} from 'react-native';
import  {Text} from 'react-native-paper';
import { AsyncStorage } from 'react-native';

export default class DifficultyScreen extends React.Component{

    state = {userName: ""};
    styles = StyleSheet.create({

        container: {
            flex: 1,
        },

        btnStyleEasy: {
            flex: 1,
            margin: 30,
            padding: 10,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#000000',
            backgroundColor: '#4bfa00',
            fontSize: 40,
            color: '#ffffff',
            textAlign: 'center',
            textAlignVertical: 'center'
        },

        btnStyleNormal: {
            flex: 1,
            margin: 30,
            padding: 10,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#000000',
            backgroundColor: '#fa9800',
            fontSize: 40,
            color: '#ffffff',
            textAlign: 'center',
            textAlignVertical: 'center'
        },

        btnStyleHard: {
            flex: 1,
            margin: 30,
            padding: 10,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#000000',
            backgroundColor: '#fa0006',
            fontSize: 40,
            color: '#ffffff',
            textAlign: 'center',
            textAlignVertical: 'center'
        },
    });

    constructor(props) {
        super(props);
    }

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('userName');
            if (value !== null) {
                this.setState({userName: value});
                // We have data!!
                console.log(value);
            }
        } catch (error) {
            // Error retrieving data
        }
    };

    componentDidMount() {
         this._retrieveData();
    }

    render() {

        //const { userName } = this.props.route.params;

        const { navigation } = this.props;

        return(
            <View style={this.styles.container}>

                <Text>userName: {this.state.userName}</Text>

                <TouchableNativeFeedback onPress={() => { navigation.navigate("A1 (Makkelijk)") }}>
                    <Text style={this.styles.btnStyleEasy}>A1 (Makkelijk)</Text>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => { navigation.navigate("A2 (Gemiddeld)") }}>
                    <Text style={this.styles.btnStyleNormal}>A2 (Gemiddeld)</Text>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => { navigation.navigate("B2 (Moeilijk)") }}>
                    <Text style={this.styles.btnStyleHard}>B2 (Moeilijk)</Text>
                </TouchableNativeFeedback>
            </View>
        )
    }
}