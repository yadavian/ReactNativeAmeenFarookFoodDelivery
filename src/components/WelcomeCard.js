import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import { setHeight, setWidth } from '../utils/Display'
import { Colors, Fonts, Images } from '../contants'

export default function WelcomeCard({ title, content, image }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Images[image]} resizeMode='contain' />
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.contentText}>{content}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: setWidth(100)
    },
    image: {
        height: setHeight(30),
        width: setWidth(60),
    },
    titleText: {
        fontSize: 22,
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.DEFAULT_BLACK
    },
    contentText: {
        fontSize: 18,
        fontFamily: Fonts.POPPINS_LIGHT,
        textAlign: 'center',
        marginHorizontal: 20,
        color: Colors.DEFAULT_GREY
    }
})