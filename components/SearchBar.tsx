import { SearchBar } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import React from 'react';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search: any) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar style={styles.container}
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />
    );
  }
}

const styles = StyleSheet.create({
    container: {
     backgroundColor: 'white',
    },searchBarContainer: {
        backgroundColor: '#00487C',
        borderBottomWidth: 0,
        borderTopWidth: 0,
      },
      inputContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        height: 40,
      },
      input: {
        fontSize: 16,
        color: '#333',
      },
    });