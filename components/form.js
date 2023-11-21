import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, Pressable, View } from "react-native";

export default function Form({ addHandler }) {
    const [text, setValue] = useState("");

    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder="Я хотю сделац..."/>
                <Pressable style={styles.button} onPress={() => addHandler(text)}>
                    <Text style={styles.text}>Добавиц в список :D</Text>
                </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        padding: 15,
        backgroundColor: "#8D9DF2",
        width: "70%",
        marginLeft: "15%",
        borderRadius: 15,

    },
    text: {
        fontFamily: "Montserrat",
        color: "white",
        fontWeight: "500"
    },
    input: {
        fontFamily: "Montserrat",
        color: "grey",
        padding: 15,
        borderBottomColor: "#8D9DF2",
        borderBottomStyle: "dotted",
        borderBottomWidth: 2,
        borderRadius: 15,
        margin: 10,
    }
});