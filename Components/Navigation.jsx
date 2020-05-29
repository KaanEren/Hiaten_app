import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from "../Screens/StartScreen";

import DifficultyScreen from "../Screens/DifficultyScreen";
import EasyScreen from "../Screens/EasyScreen";
import NormalScreen from "../Screens/NormalScreen";
import HardScreen from "../Screens/HardScreen";

export default class Navigation extends React.Component {
    render() {
        const Stack = createStackNavigator();

        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="StartScreen">
                    <Stack.Screen name="StartScreen" component={StartScreen}
                                  options={{
                                        title: 'Klik om te beginnen',
                                        headerStyle: {
                                            backgroundColor: '#a19d9d',
                                        },
                                        headerTintColor: '#fff',
                                        headerTitleStyle: {
                                            fontWeight: 'bold',
                                            justifyContent : 'center',
                                        },
                                    }}/>
                    <Stack.Screen name="DifficultyScreen" component={DifficultyScreen}
                                  options={{
                                        title: 'Kies uw niveau',
                                        headerStyle: {
                                            backgroundColor: '#a19d9d',
                                        },
                                        headerTintColor: '#fff',
                                        headerTitleStyle: {
                                            fontWeight: 'bold',
                                        },
                                    }}/>
                    <Stack.Screen name="A1 (Makkelijk)" component={EasyScreen}
                                  options={{
                                      title: 'A1 Niveau',
                                      headerStyle: {
                                          backgroundColor: '#a19d9d',
                                      },
                                      headerTintColor: '#fff',
                                      headerTitleStyle: {
                                          fontWeight: 'bold',
                                      },
                                  }}/>
                    <Stack.Screen name="A2 (Gemiddeld)" component={NormalScreen}
                                  options={{
                                      title: 'A2 Niveau',
                                      headerStyle: {
                                          backgroundColor: '#a19d9d',
                                      },
                                      headerTintColor: '#fff',
                                      headerTitleStyle: {
                                          fontWeight: 'bold',
                                      },
                                  }}/>
                    <Stack.Screen name="B2 (Moeilijk)" component={HardScreen}
                                  options={{
                                      title: 'B2 Niveau',
                                      headerStyle: {
                                          backgroundColor: '#a19d9d',
                                      },
                                      headerTintColor: '#fff',
                                      headerTitleStyle: {
                                          fontWeight: 'bold',
                                      },
                                  }}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}