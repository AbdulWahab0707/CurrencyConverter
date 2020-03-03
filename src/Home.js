import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'

import InputWithButton from './Inputs.js/InputWithButton'
import Logo from './Logo'

const Temp_Base_Currency = 'USD';
const Temp_Quote_Currency = 'Rs';
const Temp_Base_Price = '155';
const Temp_Quote_Price = '1';

export default class Home extends Component {

    handleBaseCurrency = () => {
        console.log('base pressed');
    }
    handleQuoteCurrency = () => {
        console.log('Quote pressed');
    }
    render() {
        return (
            <View style={{ backgroundColor: '#546C79', flex: 1}}>
                <View style={styles.container}>
                    <Logo />
                    <InputWithButton 
                        onPress = {this.handleBaseCurrency}
                        buttonText = {Temp_Base_Currency} />
                    <InputWithButton 
                        onPress = {this.handleQuoteCurrency}
                        buttonText = {Temp_Quote_Currency} editable={false}/>
                </View>

                <View style={styles.tButton}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("Login") }}>
                        <Text style={styles.text}>
                            ~Go to Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#546C79'
    },
    text: {
        fontSize: 20,
        color: 'blue'
    },
    tButton: {
        alignItems: 'flex-end', 
        justifyContent: 'flex-end', 
        margin: 20 
    }
})