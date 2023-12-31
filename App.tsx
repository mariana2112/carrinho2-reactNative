import Cart from './src/pages/Cart';
import { SafeAreaView, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { useFonts,
  Inter_400Regular,
  Inter_700Bold
}from  '@expo-google-fonts/inter'

const width = Dimensions.get("screen").width;

export default function App() {
  const [fonteCarregada] = useFonts({
    "InterRegular" :   Inter_400Regular,
    "InterBold":   Inter_700Bold,
  }) 

  if (!fonteCarregada){
    return null;
  }

  return (
    <SafeAreaView style={styles.fundo} >
      <StatusBar/>
      <Cart/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fundo:{
    flex: 1,
    backgroundColor:'#fcfcfc',

}
});
