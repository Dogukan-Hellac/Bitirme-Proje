import { Image, Text, Pressable, View } from 'react-native'
import React from 'react'
import styles from './CategoryItem.style'

const defaultImage = require('../../assets/images/defaultimage.jpg')

export default function CategoryItem({ source, text, theme = "primary" }) {
    const imageSource = source ? { uri: source } : defaultImage;

    return (
        <View>
            <Pressable style={styles[theme].container}>
                <Image style={styles.image} source={imageSource} />
            </Pressable>
            <View style={styles.text_container}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    )
}