import { StyleSheet } from "react-native";
import colors from '../../constants/Colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 50,
        backgroundColor: colors.white
    },
    top_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.darkred
    },
    titleText: {
        fontSize: 12
    },
    middle_container: {
        flex: 2,
    },
    input_container: {
        marginBottom: 10
    },
    button_container: {
        marginTop: 10
    },
    bottom_container: {
        flex: 2,
        justifyContent: 'center',
    },
    text: {
        alignSelf: 'center',
        marginBottom: 15,
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    textPassword: {
        color: colors.darkred
    }
})