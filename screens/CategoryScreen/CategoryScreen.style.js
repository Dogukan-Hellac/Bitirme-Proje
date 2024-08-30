import { StyleSheet } from "react-native"
import colors from '../../constants/Colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: colors.white
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.darkgray,
        alignSelf: 'flex-start',
        margin: 20
    }
})