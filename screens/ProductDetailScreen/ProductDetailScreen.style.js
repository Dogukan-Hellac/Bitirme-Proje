import { StyleSheet, Dimensions } from "react-native"
import colors from '../../constants/Colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    top_container: {
        alignItems: 'center'
    },
    image: {
        width: Dimensions.get('screen').width / 2,
        height: Dimensions.get('screen').height / 3,
        resizeMode: 'contain'
    },
    bottom_container: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: colors.lightgray
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    list: {
        alignSelf: 'flex-start',
        margin: 10
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'flex-end'
    },
    button_container: {
        padding: 10,
        paddingHorizontal: 30
    },
})