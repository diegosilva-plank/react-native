import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

const AppPro = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.darkText : styles.whiteText}>
                Hello World
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A3A3A3'
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    }
})

export default AppPro