import { View, TextInput } from 'react-native'
import React from 'react'
import styles from './CustomInput.style'

export default function CustomInput({ placeholder, onChangeText, value }) {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
}