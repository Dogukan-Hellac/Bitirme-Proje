import { View, Text } from 'react-native'
import React from 'react'
import styles from './SignUpScreen.style'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

export default function LogInScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.title}>VESTEL KİMLİK</Text>
        <Text style={styles.titleText}>Birçok Marka, Tek Hesap</Text>
        <Text style={styles.createAccount}>Hesap Oluştur</Text>
      </View>
      <View style={styles.bottom_container}>
        <View style={styles.input_container}>
          <Text>Ad</Text>
          <CustomInput
            theme='secondary'
          />
        </View>
        <View style={styles.input_container}>
          <Text>Soyad</Text>
          <CustomInput
            theme='secondary'
          />
        </View>
        <View style={styles.input_container}>
          <Text>E-posta</Text>
          <CustomInput
            theme='secondary'
          />
        </View>
        <View style={styles.input_container}>
          <Text>Telefon</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.tr}>
              <Text>TR +90</Text>
            </View>
            <View style={{ flex: 3 }}>
              <CustomInput
                theme='secondary'
                placeholder='(5__)___ __ __'
              />
            </View>
          </View>
        </View>
        <View style={styles.input_container}>
          <Text>Şifre</Text>
          <CustomInput
            isSecure
            theme='secondary'
          />
        </View>
        <View style={styles.button_container}>
          <CustomButton
            title='Hesap Oluştur'
            theme='secondary'
          />
        </View>
      </View>
    </View>
  )
}