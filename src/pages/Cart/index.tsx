import React from "react";
import { Dimensions, ScrollView } from "react-native";
import Toolbar from "./components/Toolbar";
import Detalhes from "./components/Detalhes";
import cart from '../../mocks/cart';

const width = Dimensions.get("screen").width;

export default function Cart() {
  return (
    <>
      <ScrollView>
        <Toolbar ola={cart.toolbar.ola} bv={cart.toolbar.bv} />
        <Detalhes
          prd={cart.detalhes.prd}
          pr={cart.detalhes.pr}
          prdt={cart.detalhes.prdt}
          prc={cart.detalhes.prc}
        />
      </ScrollView>
    </>
  );
}
