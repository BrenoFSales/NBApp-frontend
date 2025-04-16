import { View, Text, StyleSheet } from "react-native";

import { router } from "expo-router"

import Button from "../components/button";

export default function Home(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home!</Text>
            <Button title="Voltar" onPress={() => {router.back()}} />
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
    },

    text: {
        color: "white",
        fontSize: 30
    }
})