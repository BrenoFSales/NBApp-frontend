import { View, Text, StyleSheet } from "react-native";

import { router } from "expo-router"

import Button from "../../components/button";

export default function Profile(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile!</Text>
            <Button title="Voltar" onPress={() => {router.back()}} />
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1d2024",
    },

    text: {
        color: "white",
        fontSize: 30
    }
})