import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Список дел :)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#8D9DF2",
        padding: 30,
        alignItems: "center",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    text: {
        fontFamily: "Montserrat",
        color: "white",
        fontWeight: "700",
        fontSize: 20
    }
});