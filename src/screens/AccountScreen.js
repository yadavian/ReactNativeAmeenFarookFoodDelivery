import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Fonts, Images } from '../contants'
import Separator from '../components/Separator'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { setHeight, setWidth } from '../utils/Display'
import ToggleButton from '../components/ToggleButton'

export default function AccountScreen() {
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
                <Ionicons
                    name='chevron-back-outline'
                    size={25}
                    color={Colors.DEFAULT_WHITE}
                />
                <Text style={styles.headerText}>Account</Text>
                <View>
                    <Feather
                        name='bell'
                        size={25}
                        color={Colors.DEFAULT_WHITE}
                    />
                    <View style={styles.alertBadge}>
                        <Text style={styles.alertBadgeText}>12</Text>
                    </View>
                </View>
            </View>
            <View style={styles.profileHeaderContainer}>
                <View style={styles.profileImageContainer}>
                    <Image style={styles.profileImage} source={Images.AVATAR} />
                </View>
                <View style={styles.profileTextContainer}>
                    <Text style={styles.nameText}>Ankit Yadav</Text>
                    <Text style={styles.emailText}>ankit.yadav@gmail.com</Text>
                </View>
            </View>
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuIcon}>
                        <MaterialCommunityIcons name='truck-fast-outline' color={Colors.DEFAULT_GREEN} size={30} />
                    </View>
                    <Text style={styles.menuText}>All Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <View style={{ ...styles.menuIcon, backgroundColor: Colors.LIGHT_RED }}>
                        <MaterialCommunityIcons name='gift-outline' color={Colors.DEFAULT_RED} size={30} />
                    </View>
                    <Text style={styles.menuText}>Offers Promos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuIcon}>
                        <Entypo name='location-pin' color={Colors.DEFAULT_GREEN} size={30} />
                    </View>
                    <Text style={styles.menuText}>Delivery</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.mainContainer}>
                <Text style={styles.sectionHeaderText}>My Account</Text>
                <TouchableOpacity style={styles.sectionContainer}>
                    <View style={styles.sectionTextContainer}>
                        <Ionicons name='person-outline' size={18} color={Colors.DEFAULT_GREEN} />
                        <Text style={styles.sectionText}>Manage Profile</Text>
                    </View>
                    <Feather name='chevron-right' size={18} color={Colors.DEFAULT_GREY} />
                </TouchableOpacity>


                <TouchableOpacity style={styles.sectionContainer}>
                    <View style={styles.sectionTextContainer}>
                        <Ionicons name='card-outline' size={18} color={Colors.DEFAULT_GREEN} />
                        <Text style={styles.sectionText}>Payment</Text>
                    </View>
                    <Feather name='chevron-right' size={18} color={Colors.DEFAULT_GREY} />
                </TouchableOpacity>


                <Text style={styles.sectionHeaderText}>Notification</Text>
                <TouchableOpacity style={styles.sectionContainer}>
                    <View style={styles.sectionTextContainer}>
                        <Ionicons name='person-outline' size={18} color={Colors.DEFAULT_GREEN} />
                        <Text style={styles.sectionText}>Manage Profile</Text>
                    </View>
                    <ToggleButton size={0.5} />
                </TouchableOpacity>



                <TouchableOpacity style={styles.sectionContainer}>
                    <View style={styles.sectionTextContainer}>
                        <Ionicons name='person-outline' size={18} color={Colors.DEFAULT_GREEN} />
                        <Text style={styles.sectionText}>Offer & Promos Notification</Text>
                    </View>
                    <ToggleButton size={0.5} />
                </TouchableOpacity>



                <Text style={styles.sectionHeaderText}>Dark Mode</Text>
                <TouchableOpacity style={styles.sectionContainer}>
                    <View style={styles.sectionTextContainer}>
                        <Ionicons name='ios-color-palette-outline' size={18} color={Colors.DEFAULT_GREEN} />
                        <Text style={styles.sectionText}>Manage Profile</Text>
                    </View>
                    <ToggleButton size={0.5} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionContainer}>
                    <View style={styles.sectionTextContainer}>
                        <MaterialIcons name='logout' size={18} color={Colors.DEFAULT_GREEN} />
                        <Text style={styles.sectionText}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    alertBadge: {
        backgroundColor: Colors.DEFAULT_YELLOW,
        position: 'absolute',
        height: 16,
        width: 16,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        right: -2,
        top: -10
    },
    alertBadgeText: {
        fontSize: 10,
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.DEFAULT_WHITE
    },
    headerText: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_WHITE
    },
    profileHeaderContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    profileImageContainer: {
        borderRadius: 32,
        backgroundColor: Colors.DEFAULT_WHITE,
        elevation: 3,
        padding: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImage: {
        width: setWidth(15),
        height: setWidth(15),
        borderRadius: 32,
    },
    profileTextContainer: {
        marginLeft: 12,
    },
    nameText: {
        fontSize: 14,
        fontFamily: Fonts.POPPINS_REGULAR,
        color: Colors.DEFAULT_WHITE
    },
    emailText: {
        fontSize: 14,
        fontFamily: Fonts.POPPINS_REGULAR,
        color: Colors.DEFAULT_WHITE
    },
    menuContainer: {
        backgroundColor: Colors.DEFAULT_WHITE,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: 20,
        elevation: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    menuItem: {
        flex: 1,
        alignItems: 'center',
    },
    menuIcon: {
        backgroundColor: Colors.LIGHT_GREEN,
        height: setHeight(8),
        width: setHeight(8),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 32
    },
    menuText: {
        fontSize: 12,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_BLACK,
        textAlign: 'center',
        marginTop: 5
    },
    mainContainer: {
        marginHorizontal: 20,
        marginTop: 10,
        backgroundColor: Colors.DEFAULT_WHITE,
        elevation: 3,
        paddingHorizontal: 20,
        borderRadius: 10,
        paddingBottom: 20
    },
    sectionHeaderText: {
        fontSize: 14,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_BLACK,
        marginTop: 25
    },
    sectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    sectionTextContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20
    },
    sectionText: {
        fontSize: 14,
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
        color: Colors.DEFAULT_GREY,
        marginLeft: 10

    }
})