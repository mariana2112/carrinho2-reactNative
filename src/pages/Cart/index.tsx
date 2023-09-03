import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import image from "../../../assets/image.png";
import Bidu from "../../../assets/bidu.png";

import Feather from "@expo/vector-icons/Feather";

const width = Dimensions.get("screen").width;

export default function Cart() {
  return (
    <>
      <View style={styles.cabecalho}>
        <View>
          <Image source={Bidu} style={styles.bidu} />
        </View>

        <View style={styles.textos}>
          <Text style={styles.ola}>Olá, Bidu</Text>
          <Text style={styles.bemvindo}>Bem vindo!</Text>
        </View>

          <Feather name="layers"
          size={30}
            color="#5e0799"
            style={styles.layers}
          />

      </View>

      <View style={styles.search}>
          <Feather
            name="search"
            size={25}
            color="#5e0799"
            style={styles.iconsearch}
          />
          <TextInput
            placeholder="O que você está procurando?"
            style={styles.searchtext}
          ></TextInput>
        </View>

      <View>
        <Image source={image} style={styles.imagem} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: "row",
    
    backgroundColor: '#ffff',
    alignItems:'center'
  },
  imagem: {
    width: "90%",
    height: "55%",
    marginTop: 90,
  },
  bidu: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  ola: {
    fontSize: 20,
    fontFamily: "InterRegular",
  },
  bemvindo: {
    fontSize: 13,
    fontFamily: "InterBold",
  },
  layers:{
    
  },
  textos: {
    paddingLeft: 10,
    marginRight: 220
  },
  search: {
    flexDirection: "row",
    marginTop: 15,
    backgroundColor: "white",
    alignSelf: "center",
    height: 40,
    width: 320,
    borderRadius: 25,
  },
  iconsearch: {
    marginLeft: 10,
    alignSelf: "center",
  },
  searchtext: {
    fontFamily: "InterRegular",
    width: 260,
    textAlign: "center",
  },

});
