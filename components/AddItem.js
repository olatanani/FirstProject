import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import plus from '../images/plus.png'

const AddItem = ({ addItem }) => {
  const [text, setText] = useState('');

  const onChange = (textValue) => setText(textValue);
  return (
    <View>
      <TextInput placeholder='Add Item...' style={styles.input} onChangeText={onChange} />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          <Image
            source={plus}
            style={styles.img}
          /> Add Item</Text>

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#408E91',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
  },
  img: {
    height: 25,
    width: 25
  }
});
export default AddItem;
