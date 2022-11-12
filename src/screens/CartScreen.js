import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fonts, FoodsJson, Images } from '../contants'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Separator from '../components/Separator'
import { setHeight, setWidth } from '../utils/Display';
import FoodCard from '../components/FoodCard';

export default function CartScreen() {
    const [cartEmpty, setCartEmpty] = useState(false)
    return (
        <>
            {cartEmpty ?

                <View style={styles.emptyContainer}>
                    <Image style={styles.emptyCartImage} source={Images.EMPTY_CART} resizeMode='contain' />
                    <Text style={styles.emptyCartText}>Cart Empty</Text>
                    <Text style={styles.emptyCartSubText}>Go ahead and order tasty foods.</Text>
                    <TouchableOpacity style={styles.addButtonEmpty} onPress={() => setCartEmpty(false)}>
                        <AntDesign name='plus' color={Colors.DEFAULT_WHITE} size={15} />
                        <Text style={styles.addButtonEmptyText}>Add Food</Text>
                    </TouchableOpacity>
                </View>

                :

                <View style={styles.container}>
                    <StatusBar
                        barStyle={'dark-content'}
                        translucent
                        backgroundColor={Colors.DEFAULT_WHITE}
                    />

                    <Separator height={StatusBar.currentHeight} />

                    {/* NAVIGATION HEADER */}
                    <View style={styles.headerContainer}>
                        <Ionicons name='chevron-back-outline' size={30} />
                        <Text style={styles.headerTitle}>My Cart</Text>
                    </View>


                    {/* CART COMPONENT */}
                    <ScrollView>
                        {/* CART ALL  */}
                        <View style={styles.foodList}>
                            {FoodsJson.map((d, i) => {
                                return <FoodCard foodData={d} />
                            })}
                        </View>

                        {/* PROMOCODE ROW */}
                        <View style={styles.promoCodeContainer}>
                            <View style={styles.rowAndCenter}>
                                <Entypo name='ticket' size={30} color={Colors.DEFAULT_YELLOW} />
                                <Text style={styles.promoCodeText}>Add Promo Code</Text>
                            </View>
                            <Ionicons name='chevron-forward-outline' size={20} color={Colors.DEFAULT_BLACK} />
                        </View>

                        <View style={styles.amtContainer}>
                            <View style={styles.amtSubContainer}>
                                <Text style={styles.amtLabelText}>Item Total</Text>
                                <Text style={styles.amtText}>$ 2000</Text>
                            </View>
                            <View style={styles.amtSubContainer}>
                                <Text style={styles.amtLabelText}>Discount</Text>
                                <Text style={styles.amtText}>$ 0.00</Text>
                            </View>
                            <View style={styles.amtSubContainer}>
                                <Text style={styles.amtLabelText}>Delivery Fee</Text>
                                <Text style={styles.amtText}>Free</Text>
                            </View>
                        </View>

                        <View style={styles.totalContainer}>
                            <Text style={styles.totalText}>Total</Text>
                            <Text style={styles.totalText}>$ 600</Text>
                        </View>

                        <TouchableOpacity style={styles.checkoutButton} >
                            <View style={styles.rowAndCenter}>
                                <Ionicons name='cart-outline' color={Colors.DEFAULT_WHITE} size={20} />
                                <Text style={styles.checkoutText}>Checkout</Text>
                            </View>
                            <Text style={styles.checkoutText}>$ 600</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.checkoutButton, { backgroundColor: Colors.SECONDARY_GREEN }]} onPress={() => setCartEmpty(true)}>
                            <View style={styles.rowAndCenter}>
                                <Ionicons name='cart-outline' color={Colors.DEFAULT_WHITE} size={20} />
                                <Text style={styles.checkoutText}>Clear Cart</Text>
                            </View>
                            <Text style={styles.checkoutText}>$ 600</Text>
                        </TouchableOpacity>

                        <Separator height={setHeight(9)} />
                    </ScrollView>

                </View>}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        textAlign: 'center',
        width: setWidth(70)
    },
    foodList: {
        // marginHorizontal : setWidth(4)
    },
    promoCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: setWidth(4),
        paddingVertical: 15,
        marginTop: 10,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        justifyContent: 'space-between'
    },
    promoCodeText: {
        fontSize: 15,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginLeft: 5,
        color: Colors.DEFAULT_BLACK
    },
    rowAndCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    amtContainer: {
        marginHorizontal: setWidth(4),
        paddingVertical: 20,
        borderBottomWidth: 0.5
    },
    amtSubContainer: {
        marginVertical: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    amtLabelText: {
        fontSize: 15,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginLeft: 5,
        color: Colors.DEFAULT_BLACK
    },
    amtText: {
        fontSize: 15,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginLeft: 5,
        color: Colors.DEFAULT_BLACK
    },
    totalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: setWidth(4),
        paddingVertical: 15,
        borderBottomWidth: 0.5
    },
    totalText: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_GREEN
    },
    checkoutButton: {
        flexDirection: 'row',
        width: setWidth(80),
        backgroundColor: Colors.DEFAULT_GREEN,
        alignSelf: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        height: setHeight(7),
        marginTop: 10
    },
    checkoutText: {
        fontSize: 16,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_WHITE,
        marginLeft: 6
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyCartText: {
        fontSize: 30,
        color: Colors.DEFAULT_GREEN,
        fontFamily: Fonts.POPPINS_LIGHT
    },
    emptyCartSubText: {
        fontSize: 12,
        color: Colors.DEFAULT_GREY,
        fontFamily: Fonts.POPPINS_MEDIUM
    },
    addButtonEmpty: {
        flexDirection: 'row',
        backgroundColor: Colors.DEFAULT_YELLOW,
        borderRadius: 8,
        paddingHorizontal: setWidth(4),
        paddingVertical: 5,
        elevation: 5,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    addButtonEmptyText: {
        fontSize: 12,
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.POPPINS_MEDIUM
    },
    emptyCartImage:{
        width : setWidth(60),
        height : setWidth(60),
        // resizeMode : 'contain'
    }
})