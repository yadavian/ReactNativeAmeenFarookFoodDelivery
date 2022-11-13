import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fonts, FoodsJson, Images } from '../contants'
import { setHeight, setWidth } from '../utils/Display'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Separator from '../components/Separator'

export default function FoodScreen({ navigation }) {
  const [currentFood, setCurrentFood] = useState([])

  useEffect(() => {
    setCurrentFood(FoodsJson)
  }, [])

  console.log(`currentFood  =>`, currentFood)
  return (
    <>
      {currentFood.length > 0 &&
        <View style={styles.container}>
          <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'} />
          <Image style={styles.image} source={currentFood[0].image} />

          <ScrollView>
            <Separator height={setWidth(100)} />
            <View style={styles.mainContainer}>
              <View style={styles.titleHeaderContainer}>
                <Text style={styles.titleText}>{currentFood[0].name}</Text>
                <Text style={styles.priceText}>$ {currentFood[0].price}</Text>
              </View>

              <View style={styles.subHeaderContainer}>
                <View style={styles.rowAndCenter}>
                  <FontAwesome name='star' color={Colors.DEFAULT_YELLOW} size={20} />
                  <Text style={styles.ratingText}>4.2</Text>
                  <Text style={styles.reviewText}>(255)</Text>
                </View>
                <View style={styles.rowAndCenter}>
                  <Image style={styles.iconImg} source={Images.DELIVERY_TIME} />
                  <Text style={styles.deliveryText}>20 min</Text>
                </View>
                <View style={styles.rowAndCenter}>
                  <Image style={styles.iconImg} source={Images.DELIVERY_CHARGE} />
                  <Text style={styles.deliveryText}>Free Delivery</Text>
                </View>
              </View>

              <View style={styles.subMenuContainer}>
                <TouchableOpacity style={styles.subMenuButtonContainer}>
                  <Text style={styles.subMenuButtonText}>Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subMenuButtonContainer}>
                  <Text style={styles.subMenuButtonText}>Reviews</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.detailsContainer}>
                <Text style={styles.detailHeader}>Description</Text>
                <Text style={styles.detailContent}>{currentFood[0].description}</Text>
                <Text style={styles.detailHeader}>Ingredients</Text>
                <Text style={styles.detailContent}>{currentFood[0].ingredients}</Text>
              </View>

            </View>
          </ScrollView>

          <View style={styles.buttonsContainer}>
            <View style={styles.itemAddContainer}>
              <AntDesign name='minus' color={Colors.DEFAULT_YELLOW} />
              <Text style={styles.itemCountText}>10</Text>
              <AntDesign name='plus' color={Colors.DEFAULT_YELLOW} />
            </View>
            <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('CartScreen')}>
              <Text style={styles.cartButtonText}>Go To Cart</Text>
            </TouchableOpacity>
          </View>

        </View>}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SECONDARY_WHITE
  },
  image: {
    position: 'absolute',
    top: 0,
    height: setWidth(100),
    width: setWidth(100),
  },
  mainContainer: {
    backgroundColor: Colors.DEFAULT_WHITE,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32
  },
  titleHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10
  },
  titleText: {
    fontSize: 23,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_BLACK
  },
  priceText: {
    fontSize: 23,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Colors.DEFAULT_YELLOW
  },
  subHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 15
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ratingText: {
    fontSize: 13,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_BOLD,
    marginLeft: 5
  },
  reviewText: {
    fontSize: 13,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_BOLD,
    marginLeft: 5
  },
  deliveryText: {
    fontSize: 13,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_BOLD,
    marginLeft: 5
  },
  iconImg: {
    height: 20,
    width: 20
  },
  subMenuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    paddingHorizontal: 20,
    marginTop: 20,
    borderColor: Colors.DEFAULT_GREY,
    justifyContent: 'center'
  },
  subMenuButtonContainer: {
    paddingVertical: 15,
    width: setWidth(30),
    alignItems: 'center'
  },
  subMenuButtonText: {
    fontSize: 13,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  detailsContainer: {
    paddingHorizontal: 20
  },
  detailHeader: {
    fontSize: 15,
    color: Colors.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    marginTop: 10,
    marginBottom: 2
  },
  detailContent: {
    fontSize: 12,
    color: Colors.DEFAULT_GREY,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    textAlign: 'justify'
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    paddingHorizontal: setWidth(5),
    justifyContent: 'space-between',
    backgroundColor: Colors.DEFAULT_WHITE,
    width: setWidth(100),
    paddingVertical: setWidth(2.5),
  },
  itemAddContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_GREY2,
    height: setHeight(6),
    width: setWidth(30),
    justifyContent: 'center',
    borderRadius: 8
  },
  itemCountText: {
    color: Colors.DEFAULT_BLACK,
    fontSize: 14,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    marginHorizontal: 8
  },
  cartButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    width: setWidth(58),
    height: setHeight(6),
    justifyContent: 'center',
    borderRadius: 8,
    alignItems: 'center'
  },
  cartButtonText: {
    fontSize: 20,
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM,
    textAlign: 'justify'
  },
})