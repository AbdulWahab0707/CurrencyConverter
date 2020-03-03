import * as React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//components
import Home from './Home';

const Stack = createStackNavigator();

function Login({navigation}){
    return(
        <View style={styles.container}>
            <Text>
                I am Login Screen
            </Text>
            <TouchableOpacity onPress = {()=>{navigation.navigate("Home")}}>
                <Text style={styles.text}>
                    SignIn
                </Text>
            </TouchableOpacity>
        </View>
    );
}


export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Login" component={Login} 
                    options={{
                        header: () => null
                    }} 
                />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'blue'
    },
})