import { View, Text, StyleSheet, Image } from "react-native";

import GameList from "@/src/components/GameList";

import { router } from "expo-router";

export default function Home(){
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../../assets/images/logo.png")}
            />
            <GameList />
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1d2024",
    },

    logo: {
        margin: 10,
        width: 100,
        height: 70,
    },

    text: {
        color: "white",
        textAlign: "center",
        fontSize: 25,
        marginTop: 10
    }
})