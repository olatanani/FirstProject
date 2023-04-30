import React, { useState } from 'react';
import { View, StyleSheet, Alert, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
const App = () => {

  // Ola Mohammed Altanani
  // 120190882

  const [items, setItems] = useState([

    { id: Math.random(), text: 'Milk' },
    { id: Math.random(), text: 'Egs' },
    { id: Math.random(), text: 'Bread' },
    { id: Math.random(), text: 'Juice' },

  ]);

  const deleteItem = (id) => {

    setItems(prevItems => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item');
    } else {
      setItems(prevItems => {
        return [{ id: Math.random(), text }, ...prevItems];
      });

    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View>

        <AddItem addItem={addItem} />
        <FlatList
          data={items}
          renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
        />
      </View>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})