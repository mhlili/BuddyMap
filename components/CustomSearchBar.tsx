import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const TextSearch: React.FC<Props> = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderRadius:8,
    padding: 10,
    margin: 10,
    width: "90%",
  },
});

export default TextSearch;