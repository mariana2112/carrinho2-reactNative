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
import mouse from "../../../assets/mouse.png";

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

        <Feather name="layers" size={25} color="#5e0799" />
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

        <View style={styles.item}>
          <Image source={monitor} style={styles.imgitens} />
          <View style={styles.atext}>
            <Text style={styles.textprinc}>Monitor</Text>
            <Text style={styles.text}>R$1.800</Text>
          </View>
        </View>

        <View style={styles.item2}>
          <View style={styles.item}>
            <Image source={mouse} style={styles.imgitens2} />
            <View style={styles.atext}>
              <Text style={styles.textprinc}>Mouse</Text>
              <Text style={styles.text}>R$100</Text>
            </View>
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
    backgroundColor: "#ffff",
    alignItems: "center",
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
    alignSelf: "center",
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
    marginRight: 190,
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
  imgitens: {
    height: 90,
    width: 140,
    marginTop: 10,
  },
  imgitens2: {
    height: 90,
    width: 110,
    marginTop: 10,
    alignSelf:'center'
  },
  item: {
    backgroundColor: "white",
    width: 150,
    height: 150,
    marginLeft: 30,
    borderRadius: 10,
    paddingBottom:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  textprinc: {
    fontSize: 20,
    fontFamily: "InterBold",
  },
  text: {
    fontSize: 15,
    fontFamily: "InterRegular",
  },
  atext: {
    marginLeft: 20,
  },
  item2:{
    paddingLeft:170,
    paddingBottom:10,
    marginTop:-150
  }
});
