import React, { useState, useEffect } from 'react'
import { View, Image, Pressable, FlatList, Text } from 'react-native'
import styles from './CustomHeader.style'
import { SafeAreaView } from 'react-native-safe-area-context'

import { DrawerActions } from '@react-navigation/native'
import { useDrawerStatus } from '@react-navigation/drawer'

import Feather from '@expo/vector-icons/Feather'

import CustomInput from '../CustomInput'
import CustomButton from '../CustomButton'
import SearchItem from '../SearchItem'

import { getProductsBySearchKey } from '../../hooks/useFetch'

export default function CustomHeader({ navigation }) {
    const [isVisible, setIsVisible] = useState(true)
    const [text, setText] = useState('')
    const [data, setData] = useState([])

    const drawerStatus = useDrawerStatus()

    useEffect(() => {
        getProductsBySearchKey(text)
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, [text]);

    console.log(data);


    return (
        <View>
            <SafeAreaView style={[styles.container, isVisible && styles.container_border]}>
                <View style={styles.top_container}>
                    <Feather
                        style={styles.top_item}
                        name={drawerStatus === 'open' ? 'minus' : 'list'}
                        size={30}
                        onPress={() => (
                            navigation.dispatch((DrawerActions.toggleDrawer))
                        )}
                    />
                    <Pressable
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Image
                            style={[styles.image, styles.top_item]}
                            source={require('../../assets/images/vestel.png')}
                        />
                    </Pressable>
                </View>
                <View style={styles.bottom_container}>
                    <Feather
                        name="user"
                        size={30}
                        style={styles.bottom_item}
                        onPress={() => navigation.navigate('LogIn')}
                    />
                    <Feather
                        name="search"
                        size={30}
                        style={styles.bottom_item}
                        onPress={() => setIsVisible(!isVisible)}
                    />
                    <Feather
                        name="shopping-bag"
                        size={30}
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
            <View>
                <FlatList
                    horizontal
                    data={data.Result?.ProductList || []}
                    keyExtractor={(item) => item.ID}
                    renderItem={({ item }) => {
                        return (
                            <SearchItem 
                            title={item.DisplayName}
                            source={item.FirstProductImageURL}
                            price={item.Price1}
                            />
                        )
                    }}
                />
            </View>
        </View>
    )
}