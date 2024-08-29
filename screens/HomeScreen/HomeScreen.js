import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './HomeScreen.style'

import CategoryItem from '../../components/CategoryItem'

import { getCategories } from '../../hooks/useFetch'

export default function HomeScreen() {
  const [data, setData] = useState([])

  useEffect(() => {
    getCategories()
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data.Result.TreeList}
        keyExtractor={(item) => (item.ID)}
        numColumns={3}
        renderItem={({ item }) => {
          return (
            <CategoryItem 
            text={item.DisplayName}
            source={item.ImageUri}
            />
          )
        }
        }
      />
    </View>
  )
}