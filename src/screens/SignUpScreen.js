import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors, Fonts, Images } from '../contants'
import Separator from '../components/Separator'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { setHeight, setWidth } from '../utils/Display'
import ToggleButton from '../components/ToggleButton'

export default function SignUpScreen({ navigation }) {
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
                <Text style={styles.headerTitle} >Sign UP</Text>
            </View>

            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.content}>Enter yout Name, Email and password  for sign up. </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                <Text style={styles.alreadyText}> Already have account ?</Text>
            </TouchableOpacity>

            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <Feather
                        name='user'
                        size={22}
                        color={Colors.DEFAULT_GREY}
                        style={{ marginRight: 10 }}
                    />
                    <TextInput
                        placeholder='Username'
                        placeholderTextColor={Colors.DEFAULT_GREY}
                        selection={Colors.DEFAULT_GREY}
                        style={styles.inputText}
                    />
                </View>
            </View>
            {/* <Separator height={15} /> */}
            {/* <Text></Text> */}
            <View style={styles.inputContainer}>
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
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.inputSubContainer}>
                    <Feather
                        name='lock'
                        size={22}
                        color={Colors.DEFAULT_GREY}
                        style={{ marginRight: 10 }}
                    />
                    <TextInput
                        secureTextEntry={true}
                        placeholder='Password'
                        placeholderTextColor={Colors.DEFAULT_GREY}
                        selection={Colors.DEFAULT_GREY}
                        style={styles.inputText}
                    />
                    <Feather
                        name='eye'
                        size={22}
                        color={Colors.DEFAULT_GREY}
                        style={{ marginRight: 10 }}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.signInButton}>
                <Text style={styles.signInText}>Create Account</Text>
            </TouchableOpacity>
            <Separator height={setHeight(2)} />
            <Text style={styles.orText}>OR</Text>
            <Separator height={setHeight(2)} />

            <TouchableOpacity style={styles.googleButton}>
                <View style={styles.socialButtonContainer}>
                    <View style={styles.signInButtonLogoContainer}>
                        <Image
                            source={Images.GOOGLE}
                            style={styles.signInButtonLogo}
                        />
                    </View>
                    <Text style={styles.socialSignInButtonText}>Connect with Google</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.facebookButton}>
                <View style={styles.socialButtonContainer}>
                    <View style={styles.signInButtonLogoContainer}>
                        <Image
                            source={Images.FACEBOOK}
                            style={styles.signInButtonLogo}
                        />
                    </View>
                    <Text style={styles.socialSignInButtonText}>Connect with Facebbok</Text>
                </View>
            </TouchableOpacity>

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
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        // lineHeight : 20*1.4,
        color : Colors.DEFAULT_BLACK,
        marginTop: 50,
        marginBottom: 10,
        marginHorizontal: 20,

    },
    content: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        // lineHeight : 20*1.4,
        color : Colors.DEFAULT_BLACK,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20,

    },
    inputContainer: {
        backgroundColor: Colors.LIGHT_GREY,
        paddingHorizontal: 10,
        marginVertical: 20,
        marginHorizontal: 20,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY2,
        justifyContent: 'center'
    },
    inputSubContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputText: {
        fontSize: 18,
        textAlignVertical: 'center',
        padding: 0,
        height: setHeight(6),
        color: Colors.DEFAULT_BLACK,
        flex: 1
    },
    forgotPasswordContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rememberMeText: {
        marginLeft: 10,
        fontSize: 12,
        // lineHeight: 12 * 1.4,
        color: Colors.DEFAULT_GREY,
        fontFamily: Fonts.POPPINS_MEDIUM
    },
    forgotPasswordText: {
        marginLeft: 10,
        fontSize: 12,
        // lineHeight: 12 * 1.4,
        color: Colors.DEFAULT_GREEN,
        fontFamily: Fonts.POPPINS_BOLD
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
    signUpContainer: {
        marginHorizontal: 20,
        justifyContent: 'center',
        paddingVertical: 20,
        flexDirection: 'row'
    },
    accountText: {
        fontSize: 13,
        lineHeight: 13 * 1.4,
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_MEDIUM
    },
    signupText: {
        fontSize: 13,
        lineHeight: 13 * 1.4,
        color: Colors.DEFAULT_GREEN,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginLeft: 5
    },
    orText: {
        fontSize: 15,
        lineHeight: 15 * 1.4,
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginLeft: 5,
        alignSelf: 'center'
    },
    googleButton: {
        backgroundColor: Colors.GOOGLE_BLUE,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    facebookButton: {
        backgroundColor: Colors.FABEBOOK_BLUE,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    signInButtonLogo: {
        height: 18,
        width: 18
    },
    signInButtonLogoContainer: {
        backgroundColor: Colors.DEFAULT_WHITE,
        padding: 2,
        borderRadius: 3,
        position: 'absolute',
        left: 25
    },
    socialButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    socialSignInButtonText: {
        color: Colors.DEFAULT_WHITE,
        fontSize: 13,
        // lineHeight: 13 * 1.4,
        fontFamily: Fonts.POPPINS_MEDIUM
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    alreadyText: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        color: Colors.DEFAULT_GREEN
    }
})