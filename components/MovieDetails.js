import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity, StyleSheet,
} from "react-native";
import { useNavigation, useRoute } from "react-router-native";
import data from "../data";
import Header from "./Header";

const MovieDetails = () => {
  const route = useRoute();
  const { title } = route.params;

  const [md, setMD] = useState();
  const [transaction, setTransaction] = useState([]);
  let currentId = 1;

  function search() {
    for (let i = 0; i < data.movies.length; i++) {
      if (data.movies[i].title === title) {
        setMD(data.movies[i]);
      }
    }
  }

  useEffect(() => {
    search();
  }, [])

  function grs(length){
    let r='';
    const c= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const cl=c.length;

    for(let i=0;i<length;i++){
      r+=c.charAt(Math.random(Math.random()*cl));
    }
    return r;
  }

  const buy=(moviesId, movieName, ticketPrices, currency)=>{
    const rs= grs(15);
    const newTransaction = {
      id:currentId,
      moviesId: moviesId,
      price:ticketPrices,
      currency: currency,
      userId: rs,
    }
    currentId++;
    setTransaction([...transactions, newTransaction]);
    alert(`Hi you have a ticket for ${movieName} for ${currency} ${ticketPrices.normaal}`)
  }

  return(
    <>
    <Header/>
    {md ? (
      <View style={StyleSheet.movieDetails}>
        <View style={StyleSheet.leftPanel}>
          <Image style={styles.imageLP} source={{uri:md.image}}/>
        </View>
        <View style={styles.rightPanel}>
          <View style={styles.details}>
            <Text><Text style={styles.boldText}>Movie : </Text>{md.title}</Text>
            <Text><Text style={styles.boldText}>Genre : </Text>{md.genre}</Text>
            <Text><Text style={styles.boldText}>Director : </Text>{md.director}</Text>
            <Text><Text style={styles.boldText}>Actors : </Text>{md.stars}</Text>
            <Text><Text style={styles.boldText}>Description : </Text>{md.plot}</Text>

           <View><Text style={styles.boldText}>Tickets</Text></View> 
           <Text>Normal : {md.currency} {md.prices.normal}</Text>
           <Text>Superior : {md.currency} {md.prices.superior}</Text>
           <Text>Sofa : {md.currency} {md.prices.sofa}</Text>

          </View>
          <TouchableOpacity style={styles.buy} onPress={() => buy(md.id, md.title, md.prices, md.currency)}>
            <Text style={styles.buyText}>Book Tickets</Text>

          </TouchableOpacity>

        </View>

      </View>
    ): ""}
    </>
  )
};

const styles = StyleSheet.create({

});

export default MovieDetails;
