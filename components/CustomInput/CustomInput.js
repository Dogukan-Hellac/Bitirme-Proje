import { View, TextInput } from 'react-native'
import React, { useState } from 'react'
import styles from './CustomInput.style'

import Feather from '@expo/vector-icons/Feather'

export default function CustomInput({ placeholder, onChangeText, value, isSecure = false, theme = 'primary' }) {
    const [eye, setEye] = useState(false)
    const [secureTextEntry, setSecureTextEntry] = useState(isSecure)
    let iconName = eye ? 'eye' : 'eye-off'

    function handlePress() {
        setEye(!eye)
        setSecureTextEntry(!secureTextEntry)
    }

    return (
        <View style={styles[theme]}>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={secureTextEntry}
                style={styles.input}
            />
            {isSecure && <Feather name={iconName} size={24} color="black" onPress={handlePress} />}
        </View>
    )
}