import { StyleSheet } from "react-native"
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
    createAccount: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30
    },
    bottom_container: {
        flex: 3,
    },
    input_container: {
        marginBottom: 10
    },
    tr: {
        flex: 1,
        backgroundColor: colors.lightgray,
        borderWidth: 0.5,
        borderColor: colors.gray,
        marginVertical: 5,
        marginLeft: 5,
        padding: 5,
        justifyContent: 'center'
    },
    button_container: {
        marginTop: 10
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