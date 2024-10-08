import { StyleSheet } from "react-native"

const baseStyle = {
    container: {
        backgroundColor: 'white',
        margin: 5,
        marginVertical: 15,
        padding: 10,

        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },
}

export default StyleSheet.create({
    primary: {
        container: {
            ...baseStyle.container,
            shadowColor: 'black',
        },
    },
    secondary: {
        container: {
            ...baseStyle.container,
            borderWidth: 0.5,
            borderColor: 'red',

            shadowColor: 'red',
        },
    },
    image: {
        width: 90,
        height: 90,
    },
    text_container: {
        alignItems: 'center',
        width:100
    },
    text: {
        fontWeight: 'bold',
        textAlign:'center'
    }

})