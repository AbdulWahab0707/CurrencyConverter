import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Testing extends React.Component{
    render(){
        return(
            <View>
                <Text>holaaaa</Text> 
                <Icon name="rocket" size={50} color="#900" />
            </View>
        );
    }
}

