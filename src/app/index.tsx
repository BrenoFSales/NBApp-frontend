import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"

import { router } from "expo-router"

// My Components
import Input from "../components/Input"
import Button from "../components/button"

export default function Login() {
    const [name, setName] = useState("Hooper")

    function navegarToHome() {
        router.navigate("/home")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Olá, {name}</Text>
            <Input onChangeText={(text) => setName(text)} />
            <Button title="Entrar" onPress={navegarToHome}/>
            
            {/* Este tipo de declaração também funciona para variáveis de estado... */}
            {/* <Input onChangeText={setName} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
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