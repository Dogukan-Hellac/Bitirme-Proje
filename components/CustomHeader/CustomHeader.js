import React, { useState, useEffect } from 'react'
import { View, Image } from 'react-native'
import styles from './CustomHeader.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DrawerActions } from '@react-navigation/native'
import { useDrawerStatus } from '@react-navigation/drawer';


import Feather from '@expo/vector-icons/Feather'

import CustomInput from '../CustomInput'
import CustomButton from '../CustomButton'

export default function CustomHeader({ navigation }) {
    const [isVisible, setIsVisible] = useState(true)
    const [text, setText] = useState('')

    const drawerStatus = useDrawerStatus()

    useEffect(() => {
        console.log(drawerStatus);

    }, [drawerStatus])

    return (
        <View>
            <SafeAreaView style={[styles.container, isVisible && {
                borderBottomWidth: 3,
                borderBottomColor: 'red'
            }]}>
                <View style={styles.top_container}>
                    <Feather
                        style={styles.top_item}
                        name={drawerStatus === 'open' ? 'minus' : 'list'}
                        size={30}
                        color="black"
                        onPress={() => (
                            navigation.dispatch((DrawerActions.toggleDrawer))
                        )}
                    />
                    <Image
                        style={[styles.image, styles.top_item]}
                        source={require('../../assets/images/vestel.png')}
                    />
                </View>
                <View style={styles.bottom_container}>
                    <Feather
                        name="user"
                        size={30}
                        color="black"
                        style={styles.bottom_item}
                        onPress={() => navigation.navigate('LogIn')}
                    />
                    <Feather
                        name="search"
                        size={30}
                        color="black"
                        style={styles.bottom_item}
                        onPress={() => setIsVisible(!isVisible)}
                    />
                    <Feather
                        name="shopping-bag"
                        size={30}
                        color="black"
                        style={styles.bottom_item}
                        onPress={() => navigation.navigate('Cart')}
                    />
                </View>
            </SafeAreaView>
            <View style={[isVisible ? { display: 'none' } : styles.toggle_container]}>
                <View style={styles.input_container}>
                    <CustomInput
                        placeholder='Ürün ara...'
                        onChangeText={setText}
                        value={text}
                    />
                </View>
                <View style={styles.button_container}>
                    <CustomButton title='Ara' />
                </View>
            </View>
        </View>
    )
}