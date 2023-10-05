import React from "react";
import Feather from "@expo/vector-icons/Feather";
import {
    Dimensions,
    Image,
    StyleSheet,
    View,
    Text,
    TextInput,
  } from "react-native";
  import image from "../../../../assets/image.png";
import monitor from "../../../../assets/monitor.png";
import mouse from "../../../../assets/mouse.png";

const width = Dimensions.get("screen").width;

type Props ={
  prd: string,
  pr: string,
  prdt: string,
  prc: string
}

export default function Detalhe({prd, pr, prdt, prc}: Props) {
  return (
    <>
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
            <Text style={styles.textprinc}>{prd}</Text>
            <Text style={styles.text}>{prd}</Text>
          </View>
        </View>

        <View style={styles.item2}>
          <View style={styles.item}>
            <Image source={mouse} style={styles.imgitens2} />
            <View style={styles.atext}>
              <Text style={styles.textprinc}>{prdt}</Text>
              <Text style={styles.text}>{prc}</Text>
            </View>
          </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    imagem: {
      width: 350,
      height: 250,
      alignSelf: "center",
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
  