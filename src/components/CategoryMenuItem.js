import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Fonts, Images } from '../contants'

export default function CategoryMenuItem({ name, logo }) { 
    return (
        <TouchableOpacity style={styles.category}>
            <Image source={Images[logo]} style={styles.categoryLogo} />
            <Text style={styles.categoryText}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    category: {
        alignItems: 'center',
    },
    categoryLogo: {
        height: 30,
        width: 30
    },
    categoryText: {
        fontSize: 10,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_WHITE,
        marginTop: 5,
        opacity: 1,
    }
})