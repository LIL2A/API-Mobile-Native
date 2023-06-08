import { StyleSheet, View, Image } from 'react-native';
import guibli from '../../../../assets/totoro.png';

export  const Logo = () => {
    return (
        <Image source={guibli} style={{height: 220,width: 240}} />
    )
}

const styles = StyleSheet.create({
    logo:{
      height: 220,
      width: 240
    }
  });
  