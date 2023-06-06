import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {TextStyle, Logo} from '../../components'


export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <TextStyle>The Best Movies</TextStyle>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#71ADDC',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
