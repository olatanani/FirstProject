import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import x from '../images/x.png';

const ListItem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
          <Image 
            source={x} 
            style={styles.img} 
          /> 
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
  img: {
    height: 20,
    width: 20,
  }
});
export default ListItem;
