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
                <Text style={styles.headerTitle} >Verification</Text>
            </View>

            <Text style={styles.title}>Verification</Text>
            <Text style={styles.content}>Enter The OTP Code From The Phone We Just Sent To You at
                <Text style={styles.phoneNumber}>+91 9594371397.</Text>
            </Text>


            <View style={styles.otpContainer}>
                <View style={styles.otpBox}>
                    <TextInput style={styles.otpText} keyboardType='number-pad' maxLength={1}/>
                </View>
                <View style={styles.otpBox}>
                    <TextInput style={styles.otpText} keyboardType='number-pad' maxLength={1}/>
                </View>
                <View style={styles.otpBox}>
                    <TextInput style={styles.otpText} keyboardType='number-pad' maxLength={1}/>
                </View>
                <View style={styles.otpBox}>
                    <TextInput style={styles.otpText} keyboardType='number-pad' maxLength={1}/>
                </View>
            </View>




            <TouchableOpacity style={styles.signInButton}
                onPress={() => navigation.navigate('HomeScreen')}
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
    phoneNumber: {
        color: Colors.DEFAULT_YELLOW,
        fontSize: 18,
        fontFamily: Fonts.POPPINS_REGULAR,

    },
    otpContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    otpBox: {
        borderRadius: 5,
        borderColor: Colors.DEFAULT_BLACK,
        borderWidth: 0.5
    },
    otpText: {
        fontSize: 25,
        color : Colors.DEFAULT_BLACK,
        padding : 0,
        textAlign : 'center',
        paddingHorizontal: 18,
        paddingVertical : 10
    }

})