import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors, Fonts, Images } from '../contants'
import Separator from '../components/Separator'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { setHeight, setWidth } from '../utils/Display'
import ToggleButton from '../components/ToggleButton'
import StaticImageService from '../services/StaticImageService'

export default function RegisterPhone({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={Colors.DEFAULT_WHITE}
                translucent
            />
            <Separator height={StatusBar.currentHeight} />
            <View style={styles.headerContent}>
                <Ionicons
                    name="chevron-back-outline"
                    size={30}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.headerTitle} >Login into food House</Text>
            </View>

            <Separator height={StatusBar.currentHeight * 3} />
            <Text style={styles.content}>Enter your registered phone number to login.</Text>




            {/* <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <Feather
                        name='mail'
                        size={22}
                        color={Colors.DEFAULT_GREY}
                        style={{ marginRight: 10 }}
                    />
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor={Colors.DEFAULT_GREY}
                        selection={Colors.DEFAULT_GREY}
                        style={styles.inputText}
                    />
                </View>
            </View> */}

            {/* <Text>Phone Number</Text> */}
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.countryListContainer}>
                    <Image
                        style={styles.flatIcon}
                        source={{ uri: StaticImageService.getFlagIcon('ÚS') }} />
                    <Text>+91</Text>
                    <MaterialIcons name='keyboard-arrow-down' size={18} />
                </TouchableOpacity>

                <View style={styles.phoneInputContainer}>
                    <TextInput
                        placeholder='Phone Number'
                        placeholderTextColor={Colors.DEFAULT_GREY}
                        selectionColor={Colors.DEFAULT_GREY}
                        keyboardType='number-pad'
                        style={styles.inputText}
                    />
                </View>
            </View>



            <TouchableOpacity style={styles.signInButton}
                onPress={() => navigation.navigate('VerificationScreen')}
            >
                <Text style={styles.signInText}>Continue</Text>
            </TouchableOpacity>
            <Separator height={setHeight(2)} />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: Colors.DEFAULT_WHITE
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        // lineHeight : 20 * 1.4,
        width: setWidth(80),
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        // lineHeight : 20*1.4,
        color: Colors.DEFAULT_BLACK,
        marginTop: 50,
        marginBottom: 10,
        marginHorizontal: 20,

    },
    content: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        // lineHeight : 20*1.4,
        color: Colors.DEFAULT_BLACK,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20,

    },

    signInButton: {
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 8,
        marginHorizontal: 20,
        height: setHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    signInText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.POPPINS_MEDIUM
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 50
    },
    countryListContainer: {
        backgroundColor: Colors.LIGHT_GREY,
        width: setWidth(22),
        marginRight: 10,
        borderRadius: 8,
        height: setHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY2,
        flexDirection: 'row'
    },
    phoneInputContainer: {
        backgroundColor: Colors.LIGHT_GREY,
        borderRadius: 8,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY2,
        flex: 1,
        justifyContent: 'center'
    },
    flatIcon: {
        height: 20,
        width: 20
    },
    inputText: {
        fontSize: 18,
        textAlignVertical: 'center',
        padding: 0,
        height: setHeight(6),
        color: Colors.DEFAULT_BLACK
    }

})