import React from "react";
import {
    View,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "react-router-native";

const Header = () => {
   
    return (
      <View style={styles.header}>
        <View style={styles.innerHeader}>
          <TouchableOpacity >
            <Image style={styles.headerIcon} source={{ uri: "" }} />
          </TouchableOpacity>

          <View style={styles.searchBar}>
            <TextInput
              style={styles.input}
              placeholder="Search movies here..."
              type="text"
            />

            <Image style={styles.searchIcon} source={{ uri: "" }} />
          </View>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  headerIcon: {
   height:80,
   width:80,
   marginTop:5,

  },
  header:{
    width:'100%',
    flexDirection:'row',
    justifyContent:"space-between",
  },
  innerHeader:{
    width:"70%",
    marginHorizontal:'auto',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  searchBar:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap:10,
  },
  input:{
    height:40,
    paddingHorizontal:15,
    fontSize:20,
    color:'gray',
    borderRadius:5,
  },
  searchIcon:{
    height:40,
    height:40,

  }

});

export default Header;
