import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Header from "./components/header";
import ListItem from "./components/list";
import Form from "./components/form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Покормить котейку", key: "1" },
    { text: "Помыть котейку", key: "2" },
    { text: "Погладить котейку", key: "3" },
  ]);

const addHandler = (text) => {
  setListOfItems((list) => {
    return [
      ...list,
      { text: text, key: Math.random().toString(36).substring(7) }
    ];
  });
};

const deleteHandler = (key) => {
  setListOfItems((list) => {
    return list.filter((listOfItems) => listOfItems.key != key);
  });
};

  return (
    <View style={styles.main}>
      <Header/>
      <Form addHandler={addHandler}/>
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem el={item} deleteHandler={deleteHandler}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  
});
