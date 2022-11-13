import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fonts, FoodsJson, Images, Mock, RestaurantListJson } from '../contants';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { setHeight, setWidth } from '../utils/Display';
import Separator from '../components/Separator';
import CategoryItemList from '../components/CategoryItemList';
import FoodCard from '../components/FoodCard';

export default function RestaurantScreen({ navigation, route }) {
    const [currentRestaurant, setCurrentRestaurant] = useState(0)
    const { restaurantId } = route.params;
    // console.log(`\n\n\n currentRestaurant  =>`, currentRestaurant)

    useEffect(() => {
        const loadRestaurant = async () => {
            const data = await RestaurantListJson.filter(d => {
                return restaurantId == d.id
            });
            setCurrentRestaurant(data[0]);
        }

        loadRestaurant()
    }, [])

    return (
        <>
            {currentRestaurant != 0 &&
                <View style={styles.container}>
                    <StatusBar barStyle='default' translucent backgroundColor='transparent' />
                    <Image source={currentRestaurant?.images.cover} style={styles.backgroundImage} />

                    <ScrollView>
                        <Separator height={setHeight(35)} />
                        <View style={styles.mainContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{currentRestaurant.name}</Text>
                                <Ionicons name='bookmark-outline' color={Colors.LIGHT_YELLOW} size={24} />
                            </View>
                            <Text style={styles.tagText}>{currentRestaurant?.tags?.join(' • ')}</Text>

                            {/* REVIEW SECTION */}
                            <View style={styles.ratingReviewContainer}>
                                <FontAwesome name='star' size={15} color={Colors.DEFAULT_YELLOW} />
                                <Text style={styles.ratingText}>4.2</Text>
                                <Text style={styles.reviewText}>(422 Reviews)</Text>
                            </View>

                            {/* DELIVERY TIME DISTANCE */}
                            <View style={styles.deliveryDetailContainer}>
                                <View style={styles.rowAndCenter}>
                                    <Image style={styles.deliveryDetailIcon} source={Images.DELIVERY_CHARGE} />
                                    <Text style={styles.deliveryDetailText}>Free Delivery</Text>
                                </View>
                                <View style={styles.rowAndCenter}>
                                    <Image style={styles.deliveryDetailIcon} source={Images.DELIVERY_CHARGE} />
                                    <Text style={styles.deliveryDetailText} >{currentRestaurant?.time} min</Text>
                                </View>
                                <View style={styles.rowAndCenter}>
                                    <Image style={styles.deliveryDetailIcon} source={Images.MARKER} />
                                    <Text style={styles.deliveryDetailText}>{currentRestaurant?.distance}</Text>
                                </View>
                                <View style={styles.restaurantType}>
                                    <Text style={styles.restaurantTypeText}>{currentRestaurant?.type}</Text>
                                </View>
                            </View>

                            {/* CATEGORIES HORIZONTAL LIST */}
                            <View style={styles.categoriesContainer}>
                                <FlatList
                                    data={Mock?.CATEGORIES}
                                    keyExtractor={item => item}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={
                                        ({ item }) => {
                                            return <CategoryItemList categoryData={item} />
                                        }
                                    }
                                />
                            </View>

                            {/* FOOD LIST */}
                            <View>
                                {FoodsJson.map((d, i) => {
                                    return <FoodCard foodData={d} navigation={navigation} />
                                })}
                            </View>
                        </View>
                    </ScrollView>
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        height: setWidth(100),
        width: setWidth(100),
    },
    mainContainer: {
        backgroundColor: Colors.SECONDARY_WHITE,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 25,
        marginTop: 15
    },
    title: {
        fontSize: 25,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_BLACK
    },
    tagText: {
        fontSize: 13,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_GREY,
        marginHorizontal: 25,
        marginTop: 5
    },
    ratingReviewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 25,
        marginTop: 10
    },
    ratingText: {
        fontSize: 13,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_BLACK,
        marginLeft: 5
    },
    reviewText: {
        fontSize: 13,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_BLACK,
        marginLeft: 5
    },
    deliveryDetailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // marginHorizontal : 25
        marginTop: 10
    },
    rowAndCenter: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    deliveryDetailIcon: {
        height: 16,
        width: 16
    },
    restaurantTypeText: {
        fontSize: 12,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_YELLOW
    },
    restaurantType: {
        fontSize: 12,
        fontFamily: Fonts.POPPINS_MEDIUM,
        backgroundColor: Colors.LIGHT_YELLOW,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoriesContainer: {
        marginVertical: 20
    }

})