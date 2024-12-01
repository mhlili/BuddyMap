import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const TextField: React.FC<Props> = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    marginLeft: 10,
    marginBottom:-3,
    color: '#111',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius:8,
    padding: 10,
    margin: 10,
  },
});

export default TextField;