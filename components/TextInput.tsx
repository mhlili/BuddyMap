import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const TextField: React.FC<Props> = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
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
    borderColor: 'gray',
    borderRadius:8,
    padding: 10,
    margin: 10,
  },
});

export default TextField;