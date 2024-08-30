import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './CategoryScreen.style'

import CategoryItem from '../../components/CategoryItem'

export default function CategoryScreen({ route, navigation }) {
  const data = route.params
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kategoriler</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.ID}
        numColumns={3}
        renderItem={({ item }) => {
          return (
            <CategoryItem
              text={item.DisplayName}
              source={item.ImageUri}
              theme='secondary'
              onPress={() => navigation.navigate('Product',
                {
                  listID: item.ID,
                  displayName: item.DisplayName
                })}
            />
          )
        }}
      />
    </View>
  )
}