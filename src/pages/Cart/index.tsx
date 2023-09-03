import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import image from "../../../assets/image.png";
import Bidu from "../../../assets/bidu.png";
import monitor from "../../../assets/monitor.png";


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
          size={25}
            color="#5e0799"
          />

      </View>

      <ScrollView>

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

        <Image source={image} style={styles.imagem} />

      <View style={styles.container}>
        <View style={styles.item}>
          <View style={styles.textitens}>
          <Text>Monitor</Text>
          <Text>R$1.800,00</Text>
          </View>
          <Image source={monitor} style={styles.imgitens}/>
          <Feather name="heart" size={25} color='#5e0799'  style={styles.heart}/>
        </View>
      </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: "row",
    padding: 8,
    backgroundColor: '#ffff',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 5,

    elevation: 2,
  },
  imagem: {
    width: 350,
    height: 250,
    alignSelf: 'center'
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
  textos: {
    paddingLeft: 10,
    marginRight: 190
  },
  search: {
    flexDirection: "row",
    marginTop: 15,
    backgroundColor: "white",
    alignSelf: "center",
    height: 40,
    width: 320,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 50,
      height: 50,
    },
    shadowOpacity: 0,
    shadowRadius: 5,

    elevation: 2,
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
  imgitens:{
    height: 90,
    width: 140,
    alignSelf:'flex-end'
  },
  item:{
    marginBottom: 20,
    borderColor: '#5e0799',
    borderRadius: 25,
    padding: 12,
    borderWidth: 2,
  },
  textitens:{
    flexDirection: 'column',
  },
  container:{
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  heart:{
    alignSelf:'flex-end',
    position:'absolute',
    padding:15
  }

});
