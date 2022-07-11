import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './component/Header';
import MiddleImage from './component/MiddleImage';
import Social from './component/social';
import Footer from './component/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header/>
      <MiddleImage/>
      <Social/>
      <Footer/>
      


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
