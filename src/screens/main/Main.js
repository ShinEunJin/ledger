import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import { add, reset } from '../../modules/calculate'

const Main = () => {

    const calculate = useSelector(state => state.calculate)

    const [amount, setAmount] = useState("")

    const dispatch = useDispatch()

    const onAddAmount = async () => {
        const { data } = await axios.post("https://shin.loca.lt/api/ledger", { user: "shin-tester3", list: { name: "test", amount: Number(amount) } })
        dispatch(add(Number(amount)))
        setAmount("")
    }

    const onResetAmount = () => {
        dispatch(reset())
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleStyle}>이번 달 지출은?</Text>
            </View>
            <View>
                <Text style={styles.amountStyle}>{calculate.amount}</Text>
            </View>
            <TextInput
                style={styles.inputStyle}
                keyboardType="numeric"
                onChangeText={setAmount}
                value={amount}
            />
            <Pressable style={styles.inputBtn} onPress={onAddAmount}>
                <Text style={styles.inputBtnText}>추가</Text>
            </Pressable>
            <Pressable style={styles.inputBtn} onPress={onResetAmount}>
                <Text style={styles.inputBtnText}>초기화</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    titleStyle: {
        color: '#000'
    },
    amountStyle: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold'
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: '#000',
        color: '#000'
    },
    inputBtn: {
        backgroundColor: '#000',
        width: 100,
        alignItems: 'center'
    },
    inputBtnText: {
        color: '#fff',
        padding: 10
    }
})

export default Main
