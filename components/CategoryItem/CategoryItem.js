import { Image, Text, Pressable, View } from 'react-native'
import React from 'react'
import styles from './CategoryItem.style'

export default function CategoryItem({ source, text, theme = "primary" }) {
    return (
        <View>
            <Pressable style={styles[theme].container}>
                <Image style={styles.image} source={{ uri: source }} />
            </Pressable>
            <View style={styles.text_container}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    )
}