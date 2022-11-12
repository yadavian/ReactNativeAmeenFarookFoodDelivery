import { View, Text, StyleSheet, StatusBar, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, Fonts, Mock } from '../contants'
import Separator from '../components/Separator'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import CategoryMenuItem from '../components/CategoryMenuItem'
import RestaurantListJson from '../contants/RestaurantListJson'
import RestaurantCard from '../components/RestaurantCard'
import RestaurantVerticalCard from '../components/RestaurantVerticalCard'
import { setHeight } from '../utils/Display'

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
                backgroundColor={Colors.DEFAULT_GREEN}
                translucent
            />
            <Separator height={StatusBar.currentHeight} />
            {/* BACKGROUD GREEN */}
            <View style={styles.backgroundCurveContainer} />

            {/* FIRST ROW BADGE AND LOCATION */}
            <View style={styles.headerContainer}>
                <View style={styles.locationContainer}>
                    <Ionicons name='location-outline'
                        size={15}
                        color={Colors.DEFAULT_WHITE} />
                    <Text style={styles.locationText}>Delivered To</Text>
                    <Text style={styles.selectedLocationText}>Home</Text>
                    <MaterialIcons name='keyboard-arrow-down'
                        size={16}
                        color={Colors.DEFAULT_YELLOW} />
                    <Feather
                        name='bell'
                        size={24}
                        style={{ position: 'absolute', right: 0 }}
                        color={Colors.DEFAULT_WHITE} />
                    <View style={styles.alertBadge}>
                        <Text style={styles.alertBadgeText}>12</Text>
                    </View>
                </View>
            </View>

            {/* SECOND ROW SEARCH BOX */}
            <View style={styles.searchContainer}>
                <View style={styles.searchSection}>
                    <Ionicons
                        name='search-outline'
                        size={25}
                        color={Colors.DEFAULT_GREY}
                    />
                    <Text style={styles.searchText}>Search...</Text>
                </View>
                <Feather
                    name='sliders'
                    size={25}
                    color={Colors.DEFAULT_YELLOW}
                    style={{ marginRight: 10 }}
                />
            </View>

            {/* CATEGORIES */}
            <View style={styles.categoriesContainer}>
                {Mock.CATEGORIES.map((d, i) => {
                    return <CategoryMenuItem name={d.name} logo={d.logo} key={i} />
                })}
            </View>

            {/* SCROLLVIEW 2ND SECTION */}
            <ScrollView style={styles.listContainer}>
                <View style={styles.horizontalListContainer}>
                    {/* 1ST ROW - TOP RATED TEXT */}
                    <View style={styles.listHeader}>
                        <Text style={styles.listHeaderTitle}>Top Rated</Text>
                        <Text style={styles.listHeaderSubTitle}>See All</Text>
                    </View>
                    <FlatList
                        data={RestaurantListJson}
                        keyExtractor={item => item?.id}
                        horizontal
                        renderItem={
                            ({ item }) => {
                                return (
                                    <RestaurantCard restaurantData={item} navigation={navigation} />
                                )
                            }
                        }
                    />
                </View>

                {/* SORT LIST SECTION */}
                <View style={styles.sortListContainer}>
                    <TouchableOpacity style={styles.sortListItem}>
                        <Text style={styles.sortListItemText}>Recent</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sortListItem}>
                        <Text style={styles.sortListItemText}>Favourite</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sortListItem}>
                        <Text style={styles.sortListItemText}>Popular</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sortListItem}>
                        <Text style={styles.sortListItemText}>trending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sortListItem}>
                        <Text style={styles.sortListItemText}>Rating</Text>
                    </TouchableOpacity>
                </View>

                {/* FOOD CARDS VERTICAL  */}
                {
                    // console.log(`Restaurant  =>`, Restaurant);
                    RestaurantListJson.map((d, i) => {
                        return (
                            <RestaurantVerticalCard restaurantData={d} key={i} />
                        )
                    })
                }

                <Separator height={setHeight(10)} />

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.SECONDARY_WHITE
    },
    backgroundCurveContainer: {
        height: 2000,
        width: 2000,
        borderRadius: 2000,
        backgroundColor: Colors.DEFAULT_GREEN,
        // zIndex: -1,
        position: 'absolute',
        top: -1 * (2000 - 230),
        alignSelf: 'center'
    },
    headerContainer: {
        justifyContent: 'space-evenly'
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20
    },
    locationText: {
        color: Colors.DEFAULT_WHITE,
        marginLeft: 5,
        fontSize: 13,
        fontFamily: Fonts.POPPINS_MEDIUM
    },
    selectedLocationText: {
        color: Colors.DEFAULT_YELLOW,
        marginLeft: 5,
        fontSize: 14,
        fontFamily: Fonts.POPPINS_MEDIUM
    },
    alertBadge: {
        borderRadius: 32,
        backgroundColor: Colors.DEFAULT_YELLOW,
        justifyContent: 'center',
        alignItems: 'center',
        height: 16,
        width: 16,
        position: 'absolute',
        right: -2,
        top: -10
    },
    alertBadgeText: {
        color: Colors.DEFAULT_WHITE,
        fontSize: 10,
        fontFamily: Fonts.POPPINS_BOLD
    },
    searchContainer: {
        backgroundColor: Colors.DEFAULT_WHITE,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 45,
        borderRadius: 8,
        marginHorizontal: 20,
        marginTop: 20,

    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    searchText: {
        color: Colors.DEFAULT_GREY,
        fontSize: 16,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginLeft: 10
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    listContainer: {
        paddingVertical: 5,
        zIndex: -5
    },
    horizontalListContainer: {
        marginTop: 30
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 5
    },
    listHeaderTitle: {
        color: Colors.DEFAULT_BLACK,
        fontSize: 16,
        fontFamily: Fonts.POPPINS_MEDIUM,
    },
    listHeaderSubTitle: {
        color: Colors.DEFAULT_YELLOW,
        fontSize: 16,
        fontFamily: Fonts.POPPINS_MEDIUM,
    },
    sortListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        elevation: 1,
        marginTop: 8
    },
    sortListItem: {
        flex: 1,
        borderBottomColor: Colors.DEFAULT_YELLOW,
        borderBottomWidth: 1,
        // height : 40
    },
    sortListItemText: {
        color: Colors.DEFAULT_BLACK,
        fontSize: 13,
        fontFamily: Fonts.POPPINS_SEMI_BOLD
    }
})