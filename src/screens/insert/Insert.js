import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Insert = () => {

    const [value, setValue] = useState()

    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                style={styles.inputStyle}
                keyboardType="numeric"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#000',
        borderWidth: 1
    },
    inputStyle: {
        color: '#000'
    }
})

export default Insert

