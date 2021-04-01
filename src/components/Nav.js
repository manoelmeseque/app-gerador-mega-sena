import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return(
        <View style={styles.nav}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nav:{
        backgroundColor: '#429F44',
        height: 77,
    },
    title:{
        color: '#fff',
        textAlign: 'center',
        lineHeight: 77,
        fontSize: 22,
        fontWeight: '700',
    }
})