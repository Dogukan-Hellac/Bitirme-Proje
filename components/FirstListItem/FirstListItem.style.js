import { StyleSheet, Dimensions } from "react-native"
import colors from "../../constants/Colors"

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        margin: 5,
        width: Dimensions.get('screen').width - 40,

        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowColor: colors.darkgray,
        elevation: 5,
    },
    top_container: {
    },
    image: {
        width: 160,
        height: 160,
        resizeMode: 'contain'
    },
    bottom_container: {
        flex: 1,
        padding: 10,
        paddingVertical: 25,
        justifyContent: 'space-between'

    },
    title: {
        fontWeight: 'semibold',
        fontSize: 12
    },
    price: {
        fontWeight: 'bold'
    }
})