import React from "react";
import { Dimensions, Image, StyleSheet, View, Text } from "react-native";
import image from "../../../assets/image.png";
import Bidu from "../../../assets/bidu.png"

const width = Dimensions.get("screen").width;

export default function Cart() {
  return (
    <>
    <View>
    <Image source={Bidu} style={styles.person} />
    </View>
        <Text style={styles.ola}>Olá, Bidu</Text>
        <Text style={styles.bemvindo}>Bem vindo!</Text>
        <View>
        <Image source={image} style={styles.imagem} />
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    imagem: {
        width: "100%",
        height: "60%",
        marginTop: 90,
  },
  person: {
    width: "50%",
    height: "50%",
    borderRadius:50
},
  ola:{
    padding:35,
    fontSize:25,
    fontFamily: 'InterRegular',
    position: 'absolute',
    left:50
  },
  bemvindo:{
    padding:35,
    fontSize:15,
    fontFamily: 'InterBold',
    position: 'absolute',
    marginTop:35,
    left:50
  }
});
