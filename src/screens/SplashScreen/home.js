import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import {TextStyle, Logo} from '../../components'
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import guibli from '../../../assets/totoro.png'


export const Home = () => {

  
  const navigation = useNavigation();
  

  return (
    <View style={styles.container}>
      <Image source={guibli} style={{height: 220, width: 240}} />

      <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => navigation.navigate('Index')}>
        <Text>Entrar</Text>
      </TouchableOpacity>
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
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginTop: 60,
    width: 150,
    display: 'flex',
    alignItems: 'center',
  }
});
