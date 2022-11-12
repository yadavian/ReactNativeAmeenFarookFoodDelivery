import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Colors, Fonts } from '../contants'
import { setWidth } from '../utils/Display'

export default function FoodCard({ foodData }) {
    return (
        <View style={styles.container}>

            <TouchableOpacity>
                <Image style={styles.image} source={foodData?.image} />
            </TouchableOpacity>


            <View style={styles.detailContainer}>

                <TouchableOpacity>
                    <Text style={styles.titleText}>{foodData.name}</Text>
                    <Text style={styles.descText}>{foodData.description}</Text>
                </TouchableOpacity>

                <View style={styles.footerContainer}>
                    <Text style={styles.priceText}>$ {foodData.price}</Text>
                    <View style={styles.itemAddContainer}>
                        <AntDesign name='minus' />
                        <Text style={styles.itemCountText}>1</Text>
                        <AntDesign name='plus' />
                    </View>
                </View>
            </View>



        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 15,
        borderRadius: 8,
        elevation: 2,
        backgroundColor: Colors.LIGHT_GREY
    },
    image: {
        height: 100,
        width: 100,
        margin: 6,
        borderRadius: 8
    },
    detailContainer: {
        marginHorizontal: 5,
        paddingVertical: 10
    },
    titleText: {
        width: setWidth(60),
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_BOLD,
        fontSize: 13,
        marginBottom: 8
    },
    descText: {
        width: setWidth(60),
        color: Colors.DEFAULT_GREY,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        fontSize: 10,
        marginBottom: 8
    },
    priceText: {
        color: Colors.DEFAULT_YELLOW,
        fontFamily: Fonts.POPPINS_BOLD,
        fontSize: 14,
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 5
    },
    itemAddContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.LIGHT_GREY2,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8
    },
    itemCountText: {
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_BOLD,
        fontSize: 14,
        marginHorizontal : 10
    }
})
