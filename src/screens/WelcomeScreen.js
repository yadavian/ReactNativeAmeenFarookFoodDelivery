import { View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../contants'
import General from '../contants/General'
import { WelcomeCard } from '../components'
import { setHeight, setWidth } from '../utils/Display'
import Separator from '../components/Separator'

const Pagination = () => {


    return (
        <View style={styles.pageContainer}>
            <View style={styles.page}></View>
            <View style={styles.page}></View>
            <View style={styles.page}></View>
        </View>
    )
}

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={Colors.DEFAULT_WHITE}
                translucent
            />
            <Separator height={StatusBar.currentHeight} />
            <Separator height={setHeight(8)} />
            <View style={styles.welcomeListContainer}>
                <FlatList
                    data={General.WELCOME_CONTENTS}
                    horizontal
                    keyExtractor={item => item.title}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    overScrollMode='never'
                    renderItem={
                        ({ item }) => <WelcomeCard {...item} />
                    }
                />
            </View>
            <Separator height={setHeight(8)} />
            <Pagination />
            <Separator height={setHeight(8)} />

            <TouchableOpacity style={styles.btnGettingStartedText}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('SignInScreen')} >
                <Text style={styles.textGettingStartedButton}>Get Started</Text>
            </TouchableOpacity>

            <View style={styles.buttonContainer} >
                <TouchableOpacity style={{ marginLeft: 10 }} activeOpacity={0.8}>
                    <Text style={styles.buttonText}>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                    <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.DEFAULT_WHITE
    },
    welcomeListContainer: {
        height: setHeight(60)
    },
    pageContainer: {
        flexDirection: 'row'
    },
    page: {
        height: 8,
        width: 15,
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 32,
        marginHorizontal: 5
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: setWidth(90),
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 14,
        fontFamily: Fonts.POPPINS_BOLD,

    },
    button: {
        backgroundColor: Colors.LIGHT_GREEN,
        paddingVertical: 20,
        borderRadius: 32,
        paddingHorizontal: 11
    },
    btnGettingStartedText: {
        backgroundColor: Colors.DEFAULT_GREEN,
        paddingHorizontal: 40,
        paddingVertical: 5,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: 'center',
        elevation: 2
    },
    textGettingStartedButton: {
        fontSize: 20,
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.POPPINS_MEDIUM,
        // lineHeight: 20 *1.4
    }
})