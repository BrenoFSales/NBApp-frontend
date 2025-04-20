import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

import { router } from "expo-router";

// My Components
import Input from "../components/Input";
import Button from "../components/button";

export default function Login() {
    const [username, setUsername] = useState("Hooper");
    const [password, setPassword] = useState("");

    function navegarToHome() {
        router.navigate("/home")
    }

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({username, password})
            });

            if (!response.ok) throw new Error("Usuário ou senha inválidos");

            const data = await response.json();
            console.log(data);

            router.replace("/(tabs)/home");

        } catch (err: any) {
            Alert.alert("Erro: ", err.message);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Olá, {username}</Text>
            <View>
                <Text style={styles.label}>Username:</Text>
                <Input placeholder="Digite seu username..." onChangeText={setUsername} />
                <Text style={styles.label}>Senha:</Text>
                <Input placeholder="Digite sua senha..." secureTextEntry />
            </View>
            <Button title="Entrar" onPress={navegarToHome}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black"
    },

    text: {
        color: "white",
        fontSize: 30
    },

    label: {
        color: "white",
        fontSize: 17,
        marginTop: 10
    }
})