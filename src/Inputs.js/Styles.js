import EStyleSheet from 'react-native-extended-stylesheet';
import {StyleSheet} from 'react-native'

const Input_Height = 48;
const border_Radius = 4;

const Styles = EStyleSheet.create({
    container: {
        backgroundColor: '$white',
        width: '90%',
        height: Input_Height,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: border_Radius,
        marginVertical: 11,
    },
    buttonContainer : {
        height: Input_Height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$white',
        borderTopLeftRadius: border_Radius,
        borderBottomLeftRadius: border_Radius,
    },
    buttonText : {
        fontWeight: '600',
        fontSize: 20,
        paddingHorizontal: 16,
        color: 'primaryBlue',
    },
    input: {
        flex: 1,
        height: Input_Height,
        borderTopRightRadius: border_Radius,
        paddingHorizontal: 8,
        color: '$inputText',
        fontSize: 18,
    },
    border : {
        height: Input_Height,
        width: StyleSheet.hairlineWidth,
        backgroundColor: '#E2E2E2',
    } 
});

export default Styles;