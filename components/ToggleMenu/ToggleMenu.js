import { View, FlatList, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './ToggleMenu.style'

import { getCategories } from '../../hooks/useFetch'
import AccordionItem from '../AccordionItem'

export default function ToggleMenu({ navigation }) {
    const [data, setData] = useState([])
    
    useEffect(() => {
        getCategories()
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={data.Result?.TreeList || []}
                keyExtractor={(item) => item.ID}
                renderItem={({ item }) => {
                    return (
                        <AccordionItem item={item} onPress={(value) => navigation.navigate('Product', 
                            { listID: value.ID, displayName: value.DisplayName })} />
                    )
                }}
            />
        </View>
    )
}