import { StyleSheet } from "react-native"
import colors from '../../constants/Colors'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,

    },
    container_border: {
        borderBottomWidth: 3,
        borderBottomColor: colors.red
    },
    top_container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    top_item: {
        marginLeft: 10
    },
    image: {
        width: 100,
        height: 50,
        resizeMode: 'contain'
    },
    bottom_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottom_item: {
        marginRight: 10
    },
    toggle_container: {
        backgroundColor: colors.darkred,
        flexDirection: 'row',
    },
    input_container: {
        flex: 5
    },
    button_container: {
        flex: 1
    }
})