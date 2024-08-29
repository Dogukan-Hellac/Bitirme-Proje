import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './SearchItem.style'

export default function SearchItem({ source, title, price }) {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: source }} />
      <View style={styles.title_container}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{title}</Text>
      </View>
      <Text style={styles.price}>{price}TL</Text>
    </View>
  )
}
