import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './SearchScreen.style'

import { getProductsByCategory } from '../../hooks/useFetch'
import ProductListItem from '../../components/ProductListItem'

export default function SearchScreen({ route }) {
  const [data, setData] = useState([])

  useEffect(() => {
    getProductsByCategory(route.params.listID)
      .then(data => setData(data.Result.ProductList))
      .catch(error => console.error(error))
  }, [])

  return (
    <View style={styles.container}>
      <Text>{route.params.displayName}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.ID}
        numColumns={3}
        renderItem={({ item }) => {
          return (
            <ProductListItem
              title={item.DisplayName}
              source={item.FirstProductImageURL}
              price={item.Price1}
            />
          )
        }}
      />
    </View>
  )
}