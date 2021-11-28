import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux'

const Insert = () => {

    const dispatch = useDispatch()

    const [value, setValue] = useState()

    const onSubmitInput = () => {
        dispatch()
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                style={styles.inputStyle}
                keyboardType="numeric"
            />
            <Pressable style={{ backgroundColor: '#000', width: 30, height: 30 }} onPress={onSubmitInput}>
                <Text>등록</Text>
            </Pressable>
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

