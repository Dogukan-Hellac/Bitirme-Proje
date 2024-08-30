import { View, Text, Image, FlatList, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './ProductDetailScreen.style'

import { getProductDetail } from '../../hooks/useFetch'
import { useAddToCart } from '../../hooks/useCart'

import CustomButton from '../../components/CustomButton'

export default function ProductDetailScreen({ route }) {
    const [data, setData] = useState([])

    const addToCart = useAddToCart()

    const handleAddToCart = async () => {
        const variantID = data.VisibleAttributeList[0].VariantID
        try {
            const response = await addToCart(variantID)
            Alert.alert('Başarılı', response.Message)
        } catch (error) {
            console.error('Failed to add to cart:', error)
        }
    }

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
                <CustomButton title={data.IsOutOfStock ? "SEPETE EKLE": "STOKTA YOK"} 
                theme='secondary' onPress={data.IsOutOfStock ? handleAddToCart: null} />
            </View>
        </View>
    )
}