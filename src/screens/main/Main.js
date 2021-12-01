import React, { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { add, reset } from '../../modules/calculate'

const Main = () => {

    const calculate = useSelector(state => state.calculate)

    const [amount, setAmount] = useState("")
    const [name, setName] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        getStorage()
    }, [])

    const setStorage = async () => {
        try {
            let value = JSON.stringify({ name, amount: Number(amount) })
            await AsyncStorage.setItem('ledger', value)
        } catch (error) {
            console.log(error)
        }
    }

    const getStorage = async () => {
        try {
            let value = await AsyncStorage.getItem('ledger')
            if (value !== null) {
                console.log(JSON.parse(value))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onAddAmount = async () => {
        // const { data } = await axios.post("https://shin.loca.lt/api/ledger", { user: "shin-tester3", list: { name: "test", amount: Number(amount) } })
        dispatch(add(Number(amount)))
        setAmount("")
        setName("")
        setStorage()
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
                placeholder="가격"
                placeholderTextColor="black"
            />
            <TextInput
                style={styles.inputStyle}
                onChangeText={setName}
                value={name}
                placeholder="제목"
                placeholderTextColor="black"
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
