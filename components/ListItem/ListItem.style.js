import { StyleSheet, Dimensions } from "react-native"
import colors from "../../constants/Colors"

export default StyleSheet.create({
    container: {
        margin: 5,
    },
    top_container: {
        width: Dimensions.get('screen').width / 3 - 20,
        height: Dimensions.get('screen').height / 5,
        backgroundColor: colors.white,
        padding: 10,

        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowColor: colors.darkgray,
        elevation: 5,
    },
    image: {
        height: 100,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center'
    },
    bottom_container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        backgroundColor: colors.lightgray,
        zIndex: -1,

        borderWidth: 0.5,
        borderColor: colors.gray
    },
    price: {
        fontWeight: 'bold'
    }
})