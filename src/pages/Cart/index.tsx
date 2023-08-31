import React from "react";
import { Dimensions, Image, StyleSheet, View, Text } from "react-native";
import image from "../../../assets/image.png";

const width = Dimensions.get("screen").width;

export default function Cart() {
  return (
    <>
        <Text>Olá, Bidu</Text>
        <Image source={image} style={styles.image} />
    </>
  );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "60%",
        marginTop: 90,
  },
});
