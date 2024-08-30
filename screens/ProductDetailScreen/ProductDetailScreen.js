import { View, Text, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './ProductDetailScreen.style'

import { getProductDetail } from '../../hooks/useFetch'

import CustomButton from '../../components/CustomButton'

export default function ProductDetailScreen({ route }) {
    const [data, setData] = useState([])

    useEffect(() => {
        getProductDetail(route.params)
            .then(data => setData(data.Result))
            .catch(error => console.error(error))
    }, [])

    const firstFiveAttributes = data.AttributeGroupList ? data.VisibleAttributeList.slice(0, 5) : []

    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Image
                    style={styles.image}
                    source={{ uri: data.FirstProductImageURL }}
                />
            </View>
            <View style={styles.bottom_container}>
                <Text style={styles.title} numberOfLines={3}>{data.DisplayName}</Text>
                <FlatList
                    style={styles.list}
                    data={firstFiveAttributes}
                    keyExtractor={(item) => item.ID}
                    renderItem={({ item }) => {
                        return (
                            <Text>- {item.ActualValueText}</Text>
                        )
                    }}
                />
                <Text style={styles.price}>{data.ActualPriceToShowOnScreen}TL</Text>
            </View>
            <View style={styles.button_container}>
                <CustomButton title="SEPETE EKLE" theme='secondary' />
            </View>
        </View>
    )
}