import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './ProductListScreen.style'

import { getProductsByCategory } from '../../hooks/useFetch'

import ListItem from '../../components/ListItem'
import FirstListItem from '../../components/FirstListItem'

export default function ProductListScreen({ route, navigation }) {
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
        <FirstListItem
          title={firstItem.DisplayName}
          source={firstItem.FirstProductImageURL}
          price={firstItem.Price1}
          onPress={() =>navigation.navigate('Detail', firstItem.ID)}
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
            <ListItem
              title={item.DisplayName}
              source={item.FirstProductImageURL}
              price={item.Price1}
              onPress={() => navigation.navigate('Detail', item.ID)}
            />
          )
        }}
      />
    </View>
  )
}