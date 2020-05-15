import React from 'react';
import {StyleSheet, TouchableNativeFeedback,ImageBackground} from 'react-native';

export default class StartScreen extends React.Component{



    constructor(props) {
        super(props);
    }

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
        });

        return(
            <TouchableNativeFeedback onPress={() => { navigation.navigate("DifficultyScreen") }}>
                <ImageBackground source={require('../assets/StartFoto.jpg')} style={styles.image}/>
            </TouchableNativeFeedback>
        )
    }
}