import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Colors, Fonts, Images } from '../contants'
import { setHeight, setWidth } from '../utils/Display'

export default function SplashScreen({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('WelcomeScreen')
        }, 1000);
    }, [])


    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"
                backgroundColor={Colors.DEFAULT_GREEN}
                translucent />
            <Image source={Images.PLATE}
                resizeMode='contain'
                style={styles.image} />
            <Text style={styles.titleText}>Food Delivery</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.DEFAULT_GREEN
    },
    image: {
        height: setHeight(30),
        width: setWidth(60)
    },
    titleText: {
        color: Colors.DEFAULT_WHITE,
        fontSize: 32,
        fontFamily: Fonts.POPPINS_EXTRA_BOLD
    }
})