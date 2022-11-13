import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors, CountryCode, Fonts, Restaurant } from '../contants'

export default function RestaurantCardCard({ restaurantData, navigation }) {
    // console.log(`restaurantData\n\n\n  =>`, restaurantData)
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('RestaurantScreen', {
            restaurantId: restaurantData.id
        })}>
            <Image source={restaurantData.images.poster} style={styles.posterStyle} />
            <Text style={styles.titleText}>{restaurantData.name}</Text>
            <Text style={styles.tagText}>{restaurantData.tags?.join(' • ')}</Text>

            {/* FOOTER OF CARD */}
            <View style={styles.footerContainer}>
                <View style={styles.rowAndCenter}>
                    <FontAwesome name='star' size={14} color={Colors.DEFAULT_YELLOW} />
                    <Text style={styles.ratingText}>4</Text>
                    <Text style={styles.reviewText}>(10)</Text>
                </View>
                <View style={styles.timeAndDistance}>
                    <View style={styles.timeAndDistanceContainer}>
                        <Ionicons name='location-outline' size={15} color={Colors.DEFAULT_YELLOW} />
                        <Text style={styles.timeAndDistanceText}>{restaurantData.distance}</Text>
                    </View>
                    <View style={styles.timeAndDistanceContainer}>
                        <Ionicons name='ios-time-outline' size={15} color={Colors.DEFAULT_YELLOW} />
                        <Text style={styles.timeAndDistanceText}>{restaurantData.time}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.DEFAULT_WHITE,
        borderRadius: 10,
        elevation: 3,
        marginBottom: 5,
        marginLeft: 15
    },
    posterStyle: {
        width: 1920 * 0.15,
        height: 1080 * 0.15,
        borderRadius: 10,
        margin: 5
    },
    titleText: {
        fontSize: 15,
        marginLeft: 8,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_BLACK
    },
    tagText: {
        marginLeft: 8,
        fontSize: 11,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_GREY,
        marginBottom: 5
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 8,
        marginBottom: 6
    },
    rowAndCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeAndDistance: {
        flexDirection: 'row'
    },
    timeAndDistanceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 3,
        backgroundColor: Colors.LIGHT_YELLOW,
        borderRadius: 12,
        marginHorizontal: 3
    },
    timeAndDistanceText: {
        fontSize: 11,
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.DEFAULT_YELLOW,
    }
})