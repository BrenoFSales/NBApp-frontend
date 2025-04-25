import { useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";

import { router } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api"

// My Components
import Input from "../components/Input";
import Button from "../components/button";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await api.post("/login", {
                username,
                password,
            });

            const { access_token } = response.data;

            await AsyncStorage.setItem("token", access_token);
            router.replace("/(tabs)/home");
        } catch (err: any) {
            Alert.alert("Erro", err.response?.data?.message || "Erro ao fazer login");
        }
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../assets/images/logo.png")}
            />
            <Text style={styles.text}>Olá, {username}</Text>
            <View>
                <Text style={styles.label}>Nome de Usuário:</Text>
                <Input placeholder="Digite seu username..." onChangeText={setUsername} />

                <Text style={styles.label}>Senha:</Text>
                <Input value={password} placeholder="Digite sua senha..." secureTextEntry onChangeText={setPassword} />
            </View>
            <Button title="Entrar" onPress={handleLogin}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1d2024",
        gap: 30
    },

    logo: {
        width: 150,
        height: 100,
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