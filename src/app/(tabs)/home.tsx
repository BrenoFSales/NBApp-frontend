import { View, Text, StyleSheet, Image } from "react-native";

import GameList from "@/src/components/GameList";

export default function Home(){
    return (
        <View style={styles.container}>
            <Image
                style={styles.homeHeaderImg}
                source={require("../../../assets/images/players.png")}
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

    homeHeaderImg: {
        width: "100%",
        height: 100,
        marginBottom: 10
    },

    text: {
        color: "white",
        textAlign: "center",
        fontSize: 25,
        marginTop: 10
    }
})