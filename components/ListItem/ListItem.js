import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './ListItem.style'

export default function ListItem({ title, source, price }) {
    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Image style={styles.image} source={{ uri: source }} />
                <Text style={styles.title} numberOfLines={2}>{title}</Text>
            </View>
            <View style={styles.bottom_container}>
                <Text style={styles.price}>{price}TL</Text>
            </View>
        </View>
    )
}