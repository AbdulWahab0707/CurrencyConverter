import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default class Logo extends Component {
    render() {
        return (
            <View>
                <Image
                    style={{top: 10, width: 200, height: 200 }}
                    source={require('./assets/logo.jpg')}
                />
                <Text style={{padding: 10, alignSelf: 'center', fontSize: 20, color: '#C4EB2C'}}> Currency Converter</Text>
            </View>
        )
    }
}
