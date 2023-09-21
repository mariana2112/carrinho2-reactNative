import React from "react";
import {
  Dimensions, ScrollView,} from "react-native";
import Toolbar from './components/Toolbar';
import Detalhes from './components/Detalhes';

const width = Dimensions.get("screen").width;

export default function Cart() {
  return (
    <>
      <Toolbar/>
      <ScrollView>
        <Detalhes/>
      </ScrollView>
    </>
  );
}

