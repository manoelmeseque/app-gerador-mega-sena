import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return(
        <View style={styles.container}>
            <Text style={styles.txt}>{props.num}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#74C6A0',
        width: 50,
        height: 50,
        borderRadius: 25,
        marginTop: 10,
        marginRight: 10,
    },
    txt:{
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 50,
        color: '#000',
    }
})