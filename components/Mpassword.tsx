import { StyleSheet } from 'react-native';
import TextField from './TextInput';

interface Props {
    value: string;
    onChangeText: (text: string) => void;
}

const Mpassword: React.FC<Props> = ({ value, onChangeText }) => {

  return (
      <TextField
        label="Enter Password"
        value={value}
        onChangeText={onChangeText}
        placeholder="Password"
        secureTextEntry={true}
      />
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#111',
  },
});

export default Mpassword;