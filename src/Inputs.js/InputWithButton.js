import React, { Component, } from 'react'
import { Text, View, TouchableOpacity, TouchableHighlight, TextInput, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Styles from './Styles'

const InputWithButton = ({onPress, buttonText, editable = true}) => (

    <View style={Styles.container}>
        <TouchableHighlight style={Styles.buttonContainer} onPress={onPress}>
            <Text style={Styles.buttonText}>{buttonText}</Text>
        </TouchableHighlight>
        <View style={Styles.border}/>
        <TextInput style={Styles.input}/>
    </View>
);

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
}; 


export default InputWithButton;

// export default class InputWithButton extends Component {
//     render() {
//         return (
//             <View>
//                 <Text> textInComponent </Text>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '$white',
//         width: '90%',
//         height: Input_Height,
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderRadius: border_Radius,
//         marginVertical: 11,
//     },
//     buttonContainer: {
//         height: Input_Height,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '$white',
//         borderTopLeftRadius: border_Radius,
//         borderBottomLeftRadius: border_Radius,
//     },
//     buttonText: {
//         fontWeight: '600',
//         fontSize: 20,
//         paddingHorizontal: 16,
//         color: 'primaryBlue',
//     },
//     input: {
//         flex: 1,
//         height: Input_Height,
//         borderTopRightRadius: border_Radius,
//         paddingHorizontal: 8,
//         color: '$inputText',
//         fontSize: 18,
//     },
//     border: {
//         height: Input_Height,
//         width: StyleSheet.hairlineWidth,
//         backgroundColor: '#E2E2E2',
//     } 
//  })