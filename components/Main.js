import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, Routes, Route } from "react-router-native";
import data from "../data.json";
const Main = () => {
  const [value, setValue] = useState(data);

  const navigation = useNavigation();

  const handleMoviePress = (title) => {
    navigation.navigate("MovieDetails", { title, value });
  };

  return (
    <View style={style.moviesList}>
      {value && value.movies.length > 0 ? (
        value.movies.map((movie) => (
          <TouchableOpacity
            key={movie.id}
            style={styles.movie}
            onPress={() => handleMoviePress(movie.title)}
          >
            <Text style={styles.title}>{movie.title}</Text>
            <Image style={styles.movieImage} source={{ uri: movie.image }} />
            <View style={styles.priceContainer}>
              <Text>
                Normal : {movie.price.normal} {movie.currency}
              </Text>
              <Text>
                Superior : {movie.price.superior} {movie.currency}
              </Text>
              <Text>
                Sofa : {movie.price.sofa} {movie.currency}
              </Text>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text>No Movies found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  movieImage: {
    height: 250,
    width: 180,
    borderRadius: 5,
  },
  moviesList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: 20,
  },
  movie:{
    width:'25%',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:"center",
    position:'relative',
    padding:10,
    boxSizing:'border-box',
  },
  title:{
    fontSize:20,
  },
  movieTitle:{
    transform:[{scale:1.4}],
    marginBottom:10,
  },
  


});
export default Main;
