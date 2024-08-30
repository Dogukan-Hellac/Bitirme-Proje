import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import styles from './AccordionItem.style'

import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

import Collapsible from 'react-native-collapsible'

import colors from '../../constants/Colors'

export default function AccordionItem({ item, isSubList = false, onPress }) {
    const [collapsed, setCollapsed] = useState(true)

    return (
        <View style={[(!collapsed && item.SubCategoryList.length > 0) && styles.accordionItem, isSubList && styles.subList]}>
            <TouchableOpacity onPress={() => setCollapsed(!collapsed)}
                style={[(!collapsed && item.SubCategoryList.length > 0) ? styles.collapsedHeader : styles.header]}>
                <Text style={[(!collapsed && item.SubCategoryList.length > 0) ?
                    styles.collapsedHeaderText : styles.headerText, isSubList && styles.subListText]}>{item.DisplayName}</Text>
                {item.SubCategoryList.length > 0 &&
                    (!collapsed ? <FontAwesome6 name="minus" size={isSubList ? 10 : 15} color={colors.white} /> : <FontAwesome6 name="plus" size={isSubList ? 10 : 15} color={colors.darkgray} />)}
            </TouchableOpacity>
            <Collapsible collapsed={collapsed}>
                {item.SubCategoryList.length > 0 && (
                    <FlatList
                        data={item.SubCategoryList}
                        keyExtractor={(subItem) => subItem.ID.toString()}
                        renderItem={({ item: subItem }) => {
                            return (
                                <TouchableOpacity onPress={() => onPress(subItem)}>
                                    <View style={styles.subItem}>
                                        <Text>{subItem.DisplayName}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                        }
                    />
                )}
            </Collapsible>
        </View>
    )
}