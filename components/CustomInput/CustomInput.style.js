import { StyleSheet } from "react-native";

const baseStyle = {
    continer: {
        padding: 5,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}

export default StyleSheet.create({
    primary: {
        ...baseStyle.continer,
        backgroundColor: 'white',

    },
    input: {
        flex: 1
    },
    secondary: {
        ...baseStyle.continer,
        backgroundColor: 'lightgray',
        borderBottomWidth: 1,
        borderBottomColor: 'darkgray'
    }
})