import FriendRequest from '@/components/friend requests page/FriendRequest';
import { Link } from 'expo-router';
import { Image, Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { SearchBar } from 'react-native-screens';
import TextSearch from '../components/CustomSearchBar';

const Rectangle = () => {
  return (
    <View style={styles.rectangle} />
  );
};

export default function FriendRequests() {
    const[search, setSearch] = useState('');

    // const handleSearch = (search) => {
    //     setSearch(search);
    // }

    const friendRequests = [
        { id: 1, name: 'Alice Johnson' },
        { id: 2, name: 'Bob Smith' },
        { id: 3, name: 'Charlie Brown' },
        { id: 4, name: 'Dana White' },
    ];

    return (
    <View style={styles.container}>
        <Rectangle/>
        <View style={styles.searchBar}>
        <TextSearch label="Search" value={search} onChangeText={(text) => setSearch(text)} placeholder='Search...'/>
        </View>
        {/* <SearchBar
            placeholder="Search users"
            onChangeText={handleSearch}
            value={search}
        /> */}
        <FriendRequest/>
        <FriendRequest/>
        <FriendRequest/>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    padding: 20,
    width: "95%",
    borderRadius: 10,
    marginTop: 1,
    marginBottom: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  style: {
    color: "blue"
  },
  rectangle: {
    width: '100%',
    height: '10%',
    backgroundColor: '#00487C',
    position: 'absolute',
    top: 0,
    left: 0
  },
  text: {
    color: '#00487C',
  },
  smallText: {
    color: '#00487C',
    fontSize: 10,
  },
  request: {

  }
});