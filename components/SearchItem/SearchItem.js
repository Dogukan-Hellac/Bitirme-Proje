import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './SearchItem.style'

export default function SearchItem({ source, title, price, onPress }) {

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{ uri: source }} />
      <View style={styles.title_container}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{title}</Text>
      </View>
      <Text style={styles.price}>{price}TL</Text>
    </Pressable>
  )
}
