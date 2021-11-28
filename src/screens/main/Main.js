import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import Insert from '../insert/Insert'

const Main = () => {

    const amount = useSelector(state => state.amount.value)

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titleStyle}>이번 달 지출은?</Text>
            </View>
            <View>
                <Text style={styles.amountStyle}>{amount}</Text>
            </View>
            <Insert />
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
    }
})

export default Main
