import { StyleSheet } from 'react-native';
import TextField from './TextInput';

interface Props {
    value: string;
    onChangeText: (text: string) => void;
}

const Musername: React.FC<Props> = ({ value, onChangeText }) => {
  

  return (
      <TextField
        label="Enter Username"
        value={value}
        onChangeText={onChangeText}
        placeholder="Username"
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

export default Musername;
