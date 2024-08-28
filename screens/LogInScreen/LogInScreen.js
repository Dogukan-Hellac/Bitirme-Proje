import { View, Text } from 'react-native'
import React from 'react'
import styles from './LogInScreen.style'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

export default function LogInScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text>VESTEL KİMLİK</Text>
        <Text>Birçok Marka, Tek Hesap</Text>
      </View>
      <View style={styles.middle_container}>
        <View style={styles.input_container}>
          <Text>E-Posta / Telefon Numarası</Text>
          <CustomInput
            theme='secondary'
          />
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
            title='Giriş Yap'
            theme='secondary'
          />
        </View>
        <View style={styles.button_container}>
          <CustomButton
            title='SMS ile Giriş Yap'
            theme='third'
          />
        </View>
      </View>
      <View style={styles.bottom_container}>
        <Text>Şifremi Unuttum</Text>
        <Text>Oturum ve Hesabınızla İlgili Sorular</Text>
        <CustomButton
          title='Vestel Hesabı Oluştur'
          theme='secondary'
        />
      </View>
    </View>
  )
}