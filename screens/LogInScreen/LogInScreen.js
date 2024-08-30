import { View, Text, Alert } from 'react-native'
import React from 'react'
import styles from './LogInScreen.style'

import { Formik } from 'formik'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

import useLogin from '../../hooks/useLogin'

export default function LogInScreen({ navigation }) {
  const { login, data, error } = useLogin()

  function handleNavigate() {
    navigation.navigate('SignUp')
  }

  function handleLogin(email, password) {
    login(email, password)
  }

  if (data) {
    Alert.alert(
      "Hata",
      data.Message,
      [{ text: "Tamam" }]
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.title}>VESTEL KİMLİK</Text>
        <Text style={styles.titleText}>Birçok Marka, Tek Hesap</Text>
      </View>

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={values => handleLogin(values.email, values.password)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.middle_container}>
            <View style={styles.input_container}>
              <Text>E-Posta / Telefon Numarası</Text>
              <CustomInput
                theme='secondary'
                onChangeText={handleChange('email')}
                value={values.email}
              />
            </View>
            <View style={styles.input_container}>
              <Text>Şifre</Text>
              <CustomInput
                isSecure
                theme='secondary'
                onChangeText={handleChange('password')}
                value={values.password}
              />
            </View>
            <View style={styles.button_container}>
              <CustomButton
                title='Giriş Yap'
                theme='secondary'
                onPress={handleSubmit}
              />
            </View>
            <View style={styles.button_container}>
              <CustomButton
                title='SMS ile Giriş Yap'
                theme='third'
              />
            </View>
          </View>
        )}
      </Formik>
      <View style={styles.bottom_container}>
        <Text style={[styles.text, styles.textPassword]}>Şifremi Unuttum</Text>
        <Text style={styles.text}>Oturum ve Hesabınızla İlgili Sorular</Text>
        <CustomButton
          title='Vestel Hesabı Oluştur'
          theme='secondary'
          onPress={handleNavigate}
        />
      </View>
    </View>
  )
}