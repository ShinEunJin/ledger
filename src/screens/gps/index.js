import React, { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native'
import Geolocation from 'react-native-geolocation-service'


const index = () => {

    const getPermission = async () => {
        let granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
            title: "Cool Photo App Camera Permission",
            message:
                "Cool Photo App needs access to your camera " +
                "so you can take awesome pictures.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
        })
        console.log({ granted })
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera");
        } else {
            console.log("Camera permission denied");
        }
    }

    useFocusEffect(useCallback(() => {
        getPermission()
        Geolocation.getCurrentPosition(position => console.log(position), error => console.log(error))
    }, []))

    return (
        <View>
            <Text>gps</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default index

