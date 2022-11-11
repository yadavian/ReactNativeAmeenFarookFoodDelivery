import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../contants'


export default function ToggleButton({ size }) {


    const containerStyle = (size) => (
        {
            backgroundColor: Colors.DEFAULT_GREEN,
            height: 32 * size,
            width: 64 * size,
            borderRadius: 32,
            padding: 4 * size
        }
    )

    const toggleStyle = (size) => (
        {
            backgroundColor: Colors.DEFAULT_WHITE,
            height: 24 * size,
            width: 24 * size,
            borderRadius: 32, 
            
        }
    )


    const [isActive, setIsActive] = useState(false)
    const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0))

    const toggleHandler = () => {
        Animated.timing(animatedValue, {
            toValue: isActive ? 0 : 32 * size,
            duration: 250,
            easing: Easing.bounce,
            delay: 0,
            useNativeDriver: true
        }).start();
        setIsActive(!isActive)
    }


    return (
        // <View style={styles.container}>
        //     {/* <View style={styles.toggle}></View>
        // </View> */}

        <TouchableOpacity
            style={containerStyle(size)}
            onPress={() => toggleHandler()}
        >
            <Animated.View style={toggleStyle(size, animatedValue)}></Animated.View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.DEFAULT_GREEN,
        height: 32,
        width: 64,
        borderRadius: 32,
        padding: 4
    },
    toggle: {
        backgroundColor: Colors.DEFAULT_WHITE,
        height: 24,
        width: 24,
        borderRadius: 32
    }
})