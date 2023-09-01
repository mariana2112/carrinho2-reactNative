import React from "react";
import { Dimensions, Image, StyleSheet, View, Text } from "react-native";
import image from "../../../assets/image.png";
import Bidu from "../../../assets/bidu.png";

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
      </View>

      <View>
        <Image source={image} style={styles.imagem} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection:'row',
    padding:16,
    paddingTop: 35
  },
  imagem: {
    width: "90%",
    height: "55%",
    marginTop: 90,
  },
  bidu: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  ola: {
    fontSize: 25,
    fontFamily: "InterRegular",
  },
  bemvindo: {
    fontSize: 15,
    fontFamily: "InterBold",
  },
  textos:{
    flexDirection:'column',
    paddingLeft: 10
  }
});
