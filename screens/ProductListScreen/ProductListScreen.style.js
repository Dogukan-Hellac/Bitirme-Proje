import { StyleSheet } from "react-native"
import colors from '../../constants/Colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        padding: 10,
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.darkgray,
        alignSelf: 'flex-start',
        margin: 20
    }
})