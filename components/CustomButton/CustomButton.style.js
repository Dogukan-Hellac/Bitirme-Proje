import { StyleSheet } from "react-native";

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
                backgroundColor: 'white',
                padding: 9,
            },
            title: {
                ...baseStyle.title
            },
        },
        secondary: {
            container: {
                ...baseStyle.container,
                backgroundColor: 'red',
                padding: 10,
            },
            title: {
                ...baseStyle.title,
                color: 'white',
            },
        },
        third: {
            container: {
                ...baseStyle.container,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: 'red',
                padding: 10,
            },
            title: {
                ...baseStyle.title,
                color: 'red',
            },
        }
    })