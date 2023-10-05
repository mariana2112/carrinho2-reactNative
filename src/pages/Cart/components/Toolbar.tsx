import React from "react";
import Feather from "@expo/vector-icons/Feather";
import Bidu from "../../../../assets/bidu.png";
import mocks from '../../../mocks/cart';
import { StyleSheet, Dimensions, Text, View, Image } from "react-native";

const width = Dimensions.get("screen").width;

type Props ={
  ola: string,
  bv: string
}

export default function Detalhe({ola, bv}: Props) {
  return (
    <>
    <View style={styles.cabecalho}>
        <View>
          <Image source={Bidu} style={styles.bidu} />
        </View>

        <View style={styles.textos}>
          <Text style={styles.ola}>{ola}</Text>
          <Text style={styles.bemvindo}>{bv}</Text>
        </View>

        <Feather name="layers" size={25} color="#5e0799" />
      </View>
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
    }
  });