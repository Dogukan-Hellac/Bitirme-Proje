import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingVertical: 5
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
    input_container: {
        // display: 'none',
        backgroundColor: 'red'
    }
})