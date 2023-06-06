import React from 'react';
import {Text, StyleSheet} from 'react-native'

export const TextStyle = ({children}) => {
    return(
        <Text style={style.titleText}>
            {children}
        </Text>
    )
}

const style = StyleSheet.create({
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10
    }
})