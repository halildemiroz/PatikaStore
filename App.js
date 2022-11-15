import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from './Card';
import urunData from './urunData.json'

export default function App() {
  
  const [number, onChangeNumber] = React.useState(null)
  
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#eceff1", paddingBottom: 600}}>
      <View>
        <Text style={styles.headerText}>PatikaStore</Text>
        <TextInput
          style={styles.search_container}
          value={number}
          placeholder="Ara..."
          onChangeText={onChangeNumber}
        />
        <FlatList 
          numColumns={2}
          data={urunData}
          renderItem={({item}) => <Card items={item}/>}
        />
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 100,
  },
  headerText: {
      marginLeft: 10,
      marginTop: 20,
      color: "#70147a",
      fontWeight: "bold",
      fontSize: 30,
  },
  search_container: {
      backgroundColor: "#e1e2e3",
      margin: 10,
      borderRadius: 10,
      height: 40,
      padding: 10,
  },
  input: {
      fontSize: 18,
      marginLeft: 7,
  }
})
