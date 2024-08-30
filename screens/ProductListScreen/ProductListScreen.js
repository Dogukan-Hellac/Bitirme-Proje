import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './ProductListScreen.style'

import { getProductsByCategory } from '../../hooks/useFetch'

import ProductListItem from '../../components/ProductListItem'
import FirstProductListItem from '../../components/FirstProductListItem'

export default function ProductListScreen({ route }) {
  const [data, setData] = useState([])

  useEffect(() => {
    getProductsByCategory(route.params.listID)
      .then(data => setData(data.Result.ProductList))
      .catch(error => console.error(error))
  }, [])

  const renderHeader = () => {
    if (data.length > 0) {
      const firstItem = data[0]
      return (
        <FirstProductListItem
          title={firstItem.DisplayName}
          source={firstItem.FirstProductImageURL}
          price={firstItem.Price1}
        />
      )
    }
    return null
  }

  const dataWithoutHeader = data.length > 0 ? data.slice(1) : data

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.displayName}</Text>
      <FlatList
        data={dataWithoutHeader}
        keyExtractor={(item) => item.ID}
        numColumns={3}
        ListHeaderComponent={renderHeader()}
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