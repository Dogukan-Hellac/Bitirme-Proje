import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './FirstListItem.style'

export default function FirstListItem({ title, source, price, onPress }) {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.top_container}>
                <Image style={styles.image} source={{ uri: source }} />
            </View>
            <View style={styles.bottom_container}>
                <Text style={styles.title} numberOfLines={2}>{title}</Text>
                <Text style={styles.price}>{price}TL</Text>
            </View>
        </Pressable>
    )
}