import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../contants'

export default function CategoryItemList({ categoryData }) {
    return (
        <View style={styles.container}>
            <Text style={styles.categoryText}>{categoryData.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.LIGHT_YELLOW,
        paddingHorizontal: 15,
        height: 50,
        justifyContent: 'center'
    },
    categoryText: {
        fontSize: 13,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_BLACK
    }
})