import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from './CustomButton.style'

export default function CustomButton({onPress, title}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}