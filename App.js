
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import { NativeRouter, Route , Link, Routes} from 'react-router-native';
import Main from "./components/Main"
import MovieDetails from "./components/MovieDetails"
import React from 'react';


export default function App() {
  return (
    <NativeRouter>
      <View>
        <Header />
        <Routes>
          <Route exact path="/" Component={Main} />
          <Route path="/movieDetails/:title" Component={MovieDetails} />
        </Routes>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
     justifyContent: 'center',
  },
});
