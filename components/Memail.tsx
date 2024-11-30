import { StyleSheet } from 'react-native';
import TextField from './TextInput';

interface Props {
    value: string;
    onChangeText: (text: string) => void;
}

const Memail: React.FC<Props> = ({ value, onChangeText }) => {

  return (
      <TextField
        label="Enter Email"
        value={value}
        onChangeText={onChangeText}
        placeholder="Email"
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

export default Memail;