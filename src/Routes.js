import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Login({navigation}){
    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>
                I am Login Screen
            </Text>
            <Button title="Go to Profile Screen" 
                onPress = {()=>{navigation.navigate("Register");
                }}
            />
        </View>
    );
}

function Register({navigation}) {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text>
                I am Register Screen
            </Text>
            <Button title="Go to Login Screen" 
                onPress = {()=>{
                    // navigation.navigate("Login")
                    navigation.goBack()
                }}
            />
        </View>
    );
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" 
                // options={{
                //     header: () => null    
                // }} 
                component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
