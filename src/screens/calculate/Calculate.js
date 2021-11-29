import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { calculate, reset } from '../../modules/amount'

const Calculate = () => {

    const dispatch = useDispatch()

    const [value, setValue] = useState()

    const onSubmitInput = () => {
        dispatch(calculate(Number(value)))
        setValue("")
    }

    const onResetInput = () => {
        dispatch(reset())
    }

    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                style={styles.inputStyle}
                keyboardType="numeric"
            />
            <Pressable style={{ backgroundColor: '#000', width: 50, height: 50, marginBottom: 20 }} onPress={onSubmitInput}>
                <Text>등록</Text>
            </Pressable>
            <Pressable style={{ backgroundColor: 'aqua', width: 50, height: 50 }} onPress={onResetInput}>
                <Text>초기화</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputStyle: {
        color: '#000',
        borderColor: '#000',
        borderWidth: 1,
        marginBottom: 20
    }
})

export default Calculate

