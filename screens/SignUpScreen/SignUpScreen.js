import { View, Text, Alert } from 'react-native'
import React from 'react'
import styles from './SignUpScreen.style'

import { Formik } from 'formik'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

import useRegister from '../../hooks/useRegister'

export default function LogInScreen({ navigation }) {
  const { register, data } = useRegister()

  function handleRegister(firstName, lastName, cellPhone, email, password) {
    register(firstName, lastName, cellPhone, email, password)
  }

  const handleError = (errorData) => {
    const errors = errorData.Result
  
    const errorMessages = errors.map((error, index) => `${index + 1}. ${error.Error}`).join('\n')
  
    Alert.alert(
      "Kayıt Hatası", 
      errorMessages,  
      [{ text: "Tamam" }] 
    )
  }

  if(data){
   handleError(data) 
  }

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.title}>VESTEL KİMLİK</Text>
        <Text style={styles.titleText}>Birçok Marka, Tek Hesap</Text>
        <Text style={styles.createAccount}>Hesap Oluştur</Text>
      </View>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          cellPhone: '',
          email: '',
          password: ''
        }}
        onSubmit={values => handleRegister(values.firstName, values.lastName,
          values.cellPhone, values.email, values.password)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.bottom_container}>
            <View style={styles.input_container}>
              <Text>Ad</Text>
              <CustomInput
                theme='secondary'
                onChangeText={handleChange('firstName')}
                value={values.firstName}
              />
            </View>
            <View style={styles.input_container}>
              <Text>Soyad</Text>
              <CustomInput
                theme='secondary'
                onChangeText={handleChange('lastName')}
                value={values.lastName}
              />
            </View>
            <View style={styles.input_container}>
              <Text>E-posta</Text>
              <CustomInput
                theme='secondary'
                onChangeText={handleChange('email')}
                value={values.email}
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
                    onChangeText={handleChange('cellPhone')}
                    value={values.cellPhone}
                  />
                </View>
              </View>
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
                title='Hesap Oluştur'
                theme='secondary'
                onPress={handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  )
}