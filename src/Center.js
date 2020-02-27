import React from 'react'
import { Text, View } from 'react-native'

export const Center = ({childern}) => {
        return (
            <View style={{
                flex: 1,
                alignContent: 'center',
                justifyContent: 'center'
            }}>
                {childern}
            </View>
        )
}
