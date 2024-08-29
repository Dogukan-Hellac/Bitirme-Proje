import { StyleSheet } from "react-native"
import colors from '../../constants/Colors'

const baseStyle = {
    container: {
        margin: 5,
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
    }
}

export default StyleSheet.create(
    {
        primary: {
            container: {
                ...baseStyle.container,
                backgroundColor: colors.white,
                padding: 9,
            },
            title: {
                ...baseStyle.title
            },
        },
        secondary: {
            container: {
                ...baseStyle.container,
                backgroundColor: colors.darkred,
                padding: 10,
            },
            title: {
                ...baseStyle.title,
                color: colors.white
            },
        },
        third: {
            container: {
                ...baseStyle.container,
                backgroundColor: colors.white,
                borderWidth: 1,
                borderColor: colors.darkred,
                padding: 10,
            },
            title: {
                ...baseStyle.title,
                color: colors.darkred,
            },
        }
    })