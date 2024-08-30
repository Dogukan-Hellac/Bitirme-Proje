import { StyleSheet } from "react-native"
import colors from "../../constants/Colors"

export default StyleSheet.create({
    accordionItem: {
        borderBottomColor: colors.darkred,
        borderBottomWidth: 2
    },
    subList: {
        marginLeft:10
    },
    subListText: {
        fontSize: 13
    },
    header: {
        backgroundColor: colors.white,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 15,
        color: colors.darkgray,
    },
    collapsedHeader: {
        backgroundColor: colors.darkred,
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    collapsedHeaderText: {
        fontSize: 15,
        color: colors.white,
    },
})