import React from 'react';
import {StyleSheet, View} from 'react-native';
import  {Text} from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default class InfoScreen extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <Text>A1</Text>
            </View>
        )
    }
}