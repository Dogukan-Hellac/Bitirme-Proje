import { StyleSheet } from "react-native"
import colors from "../../constants/Colors"

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        padding: 10,
        backgroundColor: colors.white,
        borderRadius: 5,

        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    title_container: {
        width: 100,
        alignItems: 'center',
        marginBottom: 20
    },
    title: {
        fontSize: 12,
        textAlign:'center'
    },
    price: {
        fontSize: 12,
        fontWeight: 'bold'
    }
})