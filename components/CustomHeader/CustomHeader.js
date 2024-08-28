import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './CustomHeader.style'

import Feather from '@expo/vector-icons/Feather'

import CustomInput from '../CustomInput'

export default function CustomHeader({ navigation }) {
    const [isVisible, setIsVisible] = useState(true)
    const [text, setText] = useState('')

    return (
        <View>
            <SafeAreaView style={styles.container}>
                <View style={styles.top_container}>
                    <Feather
                        style={styles.top_item}
                        name="list"
                        size={30}
                        color="black"
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
                        name="shopping-cart"
                        size={30}
                        color="black"
                        style={styles.bottom_item}
                        onPress={() => navigation.navigate('Cart')}
                    />
                </View>
            </SafeAreaView>
            <View style={[isVisible ? { display: 'none' } : styles.input_container]}>
                <CustomInput
                    placeholder='Ürün ara...'
                    onChangeText={setText}
                    value={text}
                />
            </View>
        </View>

    )
}