import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Colors, Fonts, Images } from '../contants'
import { setHeight, setWidth } from '../utils/Display'

export default function RestaurantVerticalCard({ restaurantData }) {
    return (
        <View style={styles.container}>
            <View >
                <Image source={restaurantData.images.logo} style={styles.posterStyle} />
            </View>

            <View style={styles.labelContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{restaurantData.name}</Text>

                    <View style={styles.rowAndCenter}>
                        <FontAwesome />
                        <Text style={styles.ratingText}>4.2</Text>
                        <Text style={styles.reviewText}>({233})</Text>
                    </View>
                </View>

                <Text style={styles.tagsText}>{restaurantData.tags?.join(' • ')}</Text>

                <View style={styles.deliveryDetailContainer}>
                    <View style={styles.rowAndCenter}>
                        <Image style={styles.deliveryDetailIcon} source={Images.DELIVERY_CHARGE} />
                        <Text style={styles.deliveryDetailText}>Free Delivery</Text>
                    </View>
                    <View style={styles.rowAndCenter}>
                        <Image style={styles.deliveryDetailIcon} source={Images.DELIVERY_TIME} />
                        <Text style={styles.deliveryDetailText}>{restaurantData.time} min</Text>
                    </View>
                    <View style={styles.rowAndCenter}>
                        <Image style={styles.deliveryDetailIcon} />
                        <Text style={styles.deliveryDetailText}>{restaurantData.distance}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
        elevation: 1,
        marginTop: 8,
        borderRadius: 8,
        backgroundColor: Colors.DEFAULT_WHITE
    },
    labelContainer: {
        flex: 1,
        marginHorizontal: 10
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    posterStyle: {
        width: setWidth(20),
        height: setWidth(20),
        borderRadius: 10,
        margin: 5
    },
    deliveryDetailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 14,
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.DEFAULT_BLACK,
        marginBottom: 5
    },
    tagsText: {
        fontSize: 11,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_GREY,
        marginBottom: 5
    },
    deliveryDetailText: {
        marginLeft: 3,
        fontSize: 12,
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.DEFAULT_BLACK,
        // marginBottom: 5
    },
    deliveryDetailIcon: {
        height: 16,
        width: 16
    },
    rowAndCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    reviewText: {
        fontSize: 10,
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.DEFAULT_BLACK, 
    },
    ratingText: {
        marginLeft: 5,
        fontSize: 10,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_BLACK,
        // marginBottom: 5
    },
})