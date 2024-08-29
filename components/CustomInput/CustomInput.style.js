import { StyleSheet } from "react-native";
import colors from '../../constants/Colors'

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
        backgroundColor: colors.white

    },
    input: {
        flex: 1
    },
    secondary: {
        ...baseStyle.continer,
        backgroundColor: colors.lightgray,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.gray
    },
    icon:{
        color:colors.gray
    }
})