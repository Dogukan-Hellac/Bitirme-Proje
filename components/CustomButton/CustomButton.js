import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from './CustomButton.style'

export default function CustomButton({onPress, title, theme='primary'}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles[theme].container}>
      <Text style={styles[theme].title}>{title}</Text>
    </TouchableOpacity>
  )
}