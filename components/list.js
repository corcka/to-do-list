import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

export default function ListItem({ el, deleteHandler }) {
    return (
        <Pressable onPress={() => deleteHandler(el.key) }>
            <Text style={styles.text}>{el.text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#8D9DF2",
        borderBottomStyle: "solid",
        marginTop: 20,
        width: "90%",
        marginLeft: "5%",
        fontFamily: "Montserrat",
    },
});