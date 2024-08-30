import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './SearchScreen.style'

import { getProductsBySearchKey } from '../../hooks/useFetch'

import ListItem from '../../components/ListItem'
import FirstListItem from '../../components/FirstListItem'

export default function ProductListScreen({ route }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getProductsBySearchKey(route.params)
      .then(data => {
        setData(data.Result.ProductList)
        setLoading(false)
      })
      .catch(error => console.error(error))
  }, [route.params])

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  }

  const renderHeader = () => {
    if (data.length > 0) {
      const firstItem = data[0]
      return (
        <FirstListItem
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
      <Text style={styles.title}>Arama Sonucu</Text>
      <FlatList
        data={dataWithoutHeader}
        keyExtractor={(item) => item.ID}
        numColumns={3}
        ListHeaderComponent={renderHeader()}
        renderItem={({ item }) => {
          return (
            <ListItem
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